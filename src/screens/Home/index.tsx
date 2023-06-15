import { Header } from '@components/Header'
import { Container, Overview, ScrollViewContainer, Text } from './styles'
import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@routes/routes'
import Geolocation from '@react-native-community/geolocation'
import { weatherAPI } from '@services/weather-api'
import { LocationInfoProps } from '@utils/types/location'

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
    <ScrollViewContainer>
      <Container>
        <Header locale={infoLocation} kwhToday="4.32" />
        <Overview>
          <Text>Production Energy</Text>
        </Overview>
      </Container>
    </ScrollViewContainer>
  )
}
