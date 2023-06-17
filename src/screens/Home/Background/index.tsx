import { HeaderProps } from '@utils/types/header'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/index'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import background from '@assets/bkgd.png'
import { DateProps } from '@utils/types/date'

import { ImageBackground, Text, View } from 'react-native'

export function Background({ locale, kwhToday }: HeaderProps) {
  const [date, setDate] = useState<DateProps>()
  const [degreesCelsius, setDegreesCelsius] = useState<number>()

  function handleFormatCelcius(kelvin: number) {
    setDegreesCelsius(parseInt('10', kelvin - 273.15))
  }

  function handleFormatDate(date: Date) {
    const day = format(date, 'dd', {
      locale: ptBR,
    })

    const month = format(date, 'MMMM', {
      locale: ptBR,
    })

    const year = format(date, 'yyyy', {
      locale: ptBR,
    })

    const hour = format(date, 'k', {
      locale: ptBR,
    })

    const minute = format(date, 'm', {
      locale: ptBR,
    })

    setDate({ day, month, year, hour, minute })
  }

  useEffect(() => {
    if (locale) {
      handleFormatDate(locale.update)
      handleFormatCelcius(locale.temp)
    }
  }, [locale])

  return (
    <ImageBackground source={background}>
      <View className="p-6 pl-4 pr-4">
        <View className="flex-row gap-2 items-center pt-6 pb-6">
          <AwesomeIcon name="map-marker" size={25} color={'#fff'} />
          <Text className="font-bold text-base text-white">
            {locale?.locale}, {locale?.country}
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-end">
            <Text className="font-bold text-3xl text-white">{kwhToday}</Text>
            <Text className="text-white mb-1">KWh</Text>
          </View>
          <View>
            <Text className="font-medium text-2xl text-white">
              {degreesCelsius}º c
            </Text>
          </View>
        </View>
      </View>

      <View className="bg-black/60">
        <Text className="text-white text-center text-sm p-1">
          Última atualização {date?.day} de {date?.month} de {date?.year}, às{' '}
          {date?.hour}:{date?.minute}
        </Text>
      </View>
    </ImageBackground>
  )
}