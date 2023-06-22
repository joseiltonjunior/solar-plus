import { HeaderProps } from '@utils/types/header'
import { useCallback, useEffect, useState } from 'react'

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/index'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import background from '@assets/panel-solar-bg.png'
import backgroundNight from '@assets/solar-night.png'
import { DateProps } from '@utils/types/date'
import colors from 'tailwindcss/colors'

import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

export function Background({ localeInfo, latestKwhGeneration }: HeaderProps) {
  const [date, setDate] = useState<DateProps>()
  const [degreesCelsius, setDegreesCelsius] = useState<number>()
  const [img, setImg] = useState<ImageSourcePropType>(background)

  function handleFormatCelcius(kelvin: number) {
    setDegreesCelsius(parseInt('10', kelvin - 273.15))
  }

  function handleFormatDate(updateAt: string) {
    const date = new Date(updateAt)

    const day = format(date, 'dd', {
      locale: ptBR,
    })

    const month = format(date, 'MMMM', {
      locale: ptBR,
    })

    const year = format(date, 'yyyy', {
      locale: ptBR,
    })

    const hour = format(date, 'kk', {
      locale: ptBR,
    })

    const minute = format(date, 'mm', {
      locale: ptBR,
    })

    setDate({ day, month, year, hour, minute })
  }

  const changeBackgroundByHour = useCallback(() => {
    const hour = Number(date?.hour)

    if (hour) {
      if (hour >= 5 && hour <= 18) {
        return setImg(background)
      } else {
        return setImg(backgroundNight)
      }
    }
  }, [date?.hour])

  useEffect(() => {
    if (localeInfo) {
      handleFormatDate(localeInfo.update_at)
      handleFormatCelcius(localeInfo.temp)
    }

    changeBackgroundByHour()
  }, [changeBackgroundByHour, localeInfo])

  return (
    <ImageBackground source={img}>
      <View className="p-6 pl-4 pr-4">
        <View className="flex-row gap-2 items-center pt-6 pb-6">
          <AwesomeIcon name="map-marker" size={25} color={colors.white} />
          <Text className="font-bold text-base text-white">
            {localeInfo?.locale}, {localeInfo?.country}
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <View
            className={`flex-row items-end ${
              img === backgroundNight && 'bg-black/40 rounded px-1'
            }`}
          >
            <Text className="font-bold text-3xl text-white">
              {latestKwhGeneration}
            </Text>
            <Text className="text-white mb-1">KWh</Text>
          </View>
          <View
            className={`${
              img === backgroundNight && 'bg-black/40 rounded px-1'
            }`}
          >
            <Text className="font-medium text-2xl text-white">
              {degreesCelsius}º c
            </Text>
          </View>
        </View>
      </View>

      <View className="bg-black/60">
        <Text className="text-white text-center text-xs p-1">
          Última atualização {date?.day} de {date?.month} de {date?.year}, às{' '}
          {date?.hour}:{date?.minute}
        </Text>
      </View>
    </ImageBackground>
  )
}
