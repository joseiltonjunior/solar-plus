import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryTheme,
} from 'victory-native'

import colors from 'tailwindcss/colors'
import { SolarInfoProps } from '@utils/types/solar'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface chartProps {
  solarInfo?: SolarInfoProps
}

interface dataProps {
  x: string
  y: number
}

export function Chart({ solarInfo }: chartProps) {
  const [dataGenerate, setDataGenerate] = useState<dataProps[]>()
  const [dataExpect, setDataExpect] = useState<dataProps[]>()

  const handleFormatDate = useCallback(
    (type: string, value: string) => {
      let date = new Date()

      if (solarInfo?.data_type !== 'hourly') {
        date = new Date(value)
      }

      if (type === 'hourly') {
        const format = value.split(':')
        return `${format[0]}h`
      } else if (type === 'monthly') {
        const month = format(date, 'MM', {
          locale: ptBR,
        })

        return month
      } else if (type === 'daily') {
        const day = format(date, 'd', {
          locale: ptBR,
        })

        return day
      } else if (type === 'yearly') {
        const year = format(date, 'yyyy', {
          locale: ptBR,
        })

        return year
      } else {
        return value
      }
    },
    [solarInfo?.data_type],
  )

  useEffect(() => {
    if (solarInfo) {
      const x = solarInfo.x_labels
      const valuesGeneration = solarInfo.generation
      const valuesExpect = solarInfo.expected

      const formatGenerate = x.map((item, index) => {
        return {
          x: handleFormatDate(solarInfo.data_type, item),
          y: valuesGeneration[index],
        }
      })

      const formatExpect = x.map((item, index) => {
        return {
          x: handleFormatDate(solarInfo.data_type, item),
          y: valuesExpect[index] ? valuesExpect[index] : 0,
        }
      })

      setDataExpect(formatExpect)
      setDataGenerate(formatGenerate)
    }
  }, [handleFormatDate, solarInfo])

  return (
    <View className="bg-white rounded flex-1 justify-center items-center mt-2">
      <View className="flex-row gap-2 mt-2">
        <Text className="font-bold text-base text-green-600 ">
          Energia Gerada
        </Text>
        <Text className="font-bold text-base text-gray-600/50">x</Text>
        <Text className="font-bold text-base text-red-600 ">Expectativa</Text>
      </View>

      <VictoryChart
        theme={VictoryTheme.material}
        style={{
          parent: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }}
      >
        <VictoryAxis
          tickFormat={(x) => x}
          style={{
            tickLabels: {
              fontSize: solarInfo?.data_type === 'daily' ? 8.5 : 12,
              padding: 5,
            },

            axis: { stroke: 'transparent' },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => x}
          style={{
            tickLabels: { fontSize: 12, padding: 5 },
          }}
        />

        <VictoryLine
          style={{
            data: { stroke: colors.green[600] },
          }}
          data={dataGenerate}
        />

        <VictoryLine
          style={{
            data: { stroke: colors.red[600] },
          }}
          data={dataExpect}
        />
      </VictoryChart>
    </View>
  )
}
