import { Header } from '@components/Header'

import { useRoute } from '@react-navigation/native'

import { Background } from './Background'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'
import { RouteParamsProps } from '@routes/routes'
import { useCallback, useEffect, useState } from 'react'
import api from '@services/api'
import { SolarInfoProps } from '@utils/types/solar'
import { Resume } from './Resume'
import { Total } from './Total'
import { Select } from '@components/Select'
import { Chart } from './Chart'
import { Menu } from '@components/Menu'

export function Home() {
  const { params } = useRoute<RouteParamsProps<'Home'>>()
  const {
    localeInfo,
    solarInfoHourly,
    solarInfoDaily,
    solarInfoMonthly,
    solarInfoYearly,
  } = params

  const [solarAttInfo, setSolarAttInfo] = useState<SolarInfoProps>()

  const handleGetSolarInfo = useCallback(async (period: string) => {
    await api
      .get(`/test-2023?dataType=${period}`)
      .then((result) => {
        const { data } = result.data
        setSolarAttInfo(data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (solarInfoHourly) {
      setSolarAttInfo(solarInfoHourly)
    }
  }, [solarInfoHourly])

  return (
    <ScrollView className="bg-white">
      <View>
        <Header />
        <Menu />

        <Background
          localeInfo={localeInfo}
          latestKwhGeneration={solarInfoHourly.totals.kwh}
        />

        <View className="p-2 bg-slate-200">
          <Select
            className="mb-2"
            onAction={(item) => handleGetSolarInfo(item.value)}
          />

          <Resume solarInfo={solarAttInfo} />

          <Total
            kwhToday={solarInfoDaily.totals.kwh}
            kwhMonth={solarInfoMonthly.totals.kwh}
            kwhYear={solarInfoYearly.totals.kwh}
          />

          <Chart solarInfo={solarAttInfo} />
        </View>
      </View>
    </ScrollView>
  )
}
