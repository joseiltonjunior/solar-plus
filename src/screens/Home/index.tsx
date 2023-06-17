import { Header } from '@components/Header'

import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@routes/routes'
import Geolocation from '@react-native-community/geolocation'
import { weatherAPI } from '@services/weather-api'
import { LocationInfoProps } from '@utils/types/location'
import { Background } from './Background'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'

export function Home() {
  const [infoLocation, setInfoLocation] = useState<LocationInfoProps>()

  const navigation = useNavigation<StackNavigationProps>()

  const GetCurrentWeather = useCallback(() => {
    Geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const { data } = await weatherAPI.get(
          `/weather?lat=${latitude}&lon=${longitude}&appid=19304a0bf354c6f5ceb08d8952a2ce64`,
        )

        const { temp } = data.main
        const { name: locale } = data
        const { country } = data.sys
        const { description } = data.weather[0]

        setInfoLocation({
          locale,
          country,
          description,
          temp,
          update: new Date(),
        })
      },
      () => {
        console.log('tratar error')
      },
      {
        timeout: 20000,
      },
    )
  }, [])

  const CheckLocation = useCallback(async () => {
    const value = await AsyncStorage.getItem('acessLocation')
    if (value !== null) {
      GetCurrentWeather()
    } else {
      navigation.navigate('AcessLocation')
    }
  }, [GetCurrentWeather, navigation])

  useEffect(() => {
    CheckLocation()
  }, [CheckLocation])

  return (
    <ScrollView className="bg-white">
      <View>
        <Header />

        <Background locale={infoLocation} kwhToday="4.32" />

        <View className="p-2 bg-slate-200">
          <View className="flex-row gap-2">
            <View className="flex-1">
              <View className="bg-white rounded flex-1 h-32"></View>
              <View className="bg-white rounded flex-1 h-32 mt-2"></View>
            </View>

            <View className="bg-white rounded flex-1 h-auto"></View>
            <View className="bg-white rounded flex-1 h-auto"></View>
          </View>

          <View className="bg-white rounded flex-1 h-32 mt-2"></View>

          <View className="bg-white rounded flex-1 h-56 mt-2"></View>
        </View>
      </View>
    </ScrollView>
  )
}
