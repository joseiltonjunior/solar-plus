import { Image, Text, View } from 'react-native'

import batteryIcon from '@assets/battery.png'
import solarIcon from '@assets/panel-solar.png'
import treesIcon from '@assets/tree.png'
import carbonIcon from '@assets/co2.png'
import { SolarInfoProps } from '@utils/types/solar'
import { formatKWh } from '@utils/formatKwh'

interface ResumeProps {
  solarInfo?: SolarInfoProps
}

export function Resume({ solarInfo }: ResumeProps) {
  function formatarCO2(co2: number): string {
    const unidades = ['t', 'kt', 'Mt', 'Gt'] // Toneladas, Quilotoneladas, Megatoneladas, Gigatoneladas
    let valor = co2
    let escala = 0

    while (valor >= 1000 && escala < unidades.length - 1) {
      valor /= 1000
      escala++
    }

    return `- ${valor.toFixed(2)} ${unidades[escala]}`
  }

  return (
    <View className="flex-row gap-2">
      <View className="flex-1">
        <View className="bg-white rounded flex-1 h-28 items-center py-2 justify-center">
          <Text className="font-bold text-gray-600">
            {solarInfo?.totals.kwh && formatKWh(solarInfo?.totals.kwh)}
          </Text>
          <Image
            source={solarIcon}
            alt="solar icon"
            className="w-14 h-14 mt-1"
          />
        </View>
        <View className="bg-white rounded flex-1 h-28 mt-2 items-center py-2 justify-center">
          <Image
            source={batteryIcon}
            alt="battery icon"
            className="w-14 h-14"
          />
          <Text className="font-bold text-gray-600 mt-1">
            {solarInfo?.totals.percentage}%
          </Text>
        </View>
      </View>

      <View className="bg-white rounded flex-1 h-auto items-center py-3 justify-center">
        <Text className="font-bold text-green-600 mb-auto text-base">
          + {solarInfo?.totals.trees}
        </Text>
        <Image
          source={treesIcon}
          alt="trees icon"
          className="w-20 h-20 absolute"
        />
      </View>
      <View className="bg-white rounded flex-1 h-auto items-center justify-center py-3">
        <Text className="font-bold text-red-600 mb-auto text-base">
          {solarInfo?.totals.co2 && formatarCO2(solarInfo.totals.co2)}
        </Text>
        <Image
          source={carbonIcon}
          alt="carbon icon"
          className="w-20 h-20 absolute"
        />
      </View>
    </View>
  )
}
