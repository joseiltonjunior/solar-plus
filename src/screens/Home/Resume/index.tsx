import { Image, Text, View } from 'react-native'

import batteryIcon from '@assets/battery.png'
import solarIcon from '@assets/panel-solar.png'
import treesIcon from '@assets/tree.png'
import carbonIcon from '@assets/co2.png'
import { SolarInfoProps } from '@utils/types/solar'

interface ResumeProps {
  solarInfo?: SolarInfoProps
}

export function Resume({ solarInfo }: ResumeProps) {
  return (
    <View className="flex-row gap-2">
      <View className="flex-1">
        <View className="bg-white rounded flex-1 h-28 items-center py-2 justify-center">
          <Text className="font-bold text-gray-950">
            {solarInfo?.totals.kwh}KWh
          </Text>
          <Image
            source={solarIcon}
            alt="solar icon"
            className="w-14 h-14 mt-2"
          />
        </View>
        <View className="bg-white rounded flex-1 h-28 mt-2 items-center py-2 justify-center">
          <Image
            source={batteryIcon}
            alt="battery icon"
            className="w-14 h-14"
          />
          <Text className="font-bold text-gray-950">
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
          - {solarInfo?.totals.co2}
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
