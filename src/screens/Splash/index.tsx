import AnimatedLottieView from 'lottie-react-native'
import splashJson from '@assets/splash.json'
import { BackHandler, Dimensions, View } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@routes/routes'
import NetInfo from '@react-native-community/netinfo'

import Geolocation from '@react-native-community/geolocation'
import weatherAPI from '@services/weather-api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '@services/api'
import { LocaleInfoProps } from '@utils/types/locale'
import { Modal } from '@components/Modal'
import crashlytics from '@react-native-firebase/crashlytics'

const size = Dimensions.get('window').width * 0.9

export function SplashScreen() {
  const navigation = useNavigation<StackNavigationProps>()
  const [modalError, setModalError] = useState(false)

  const handleGetSolarInfo = useCallback(
    async (localeInfo: LocaleInfoProps) => {
      try {
        const solarInfoHourly = await api.get(`/test-2023?dataType=hourly`)
        const solarInfoDaily = await api.get(`/test-2023?dataType=daily`)
        const solarInfoMonthly = await api.get(`/test-2023?dataType=monthly`)
        const solarInfoYearly = await api.get(`/test-2023?dataType=yearly`)

        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              params: {
                localeInfo,
                solarInfoHourly: solarInfoHourly.data.data,
                solarInfoDaily: solarInfoDaily.data.data,
                solarInfoMonthly: solarInfoMonthly.data.data,
                solarInfoYearly: solarInfoYearly.data.data,
              },
            },
          ],
        })
      } catch (error) {
        const err = error as Error
        crashlytics().recordError(err)
        setModalError(true)
      }
    },
    [navigation],
  )

  const GetCurrentWeather = useCallback(() => {
    Geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const { data } = await weatherAPI.get(
            `/weather?lat=${latitude}&lon=${longitude}&appid=19304a0bf354c6f5ceb08d8952a2ce64`,
          )

          const { temp } = data.main
          const { name: locale } = data
          const { country } = data.sys
          const { description } = data.weather[0]

          const currentDate = new Date()
          const formattedDate = currentDate.toISOString()

          const localeInfo = {
            locale,
            country,
            description,
            temp,
            update_at: formattedDate,
          }

          handleGetSolarInfo(localeInfo)
        } catch (error) {
          const err = error as Error
          crashlytics().recordError(err)
          setModalError(true)
        }
      },
      (error) => {
        crashlytics().recordError({
          message: error.message,
          name: error.code.toString(),
        })
        setModalError(true)
      },
      {
        timeout: 20000,
      },
    )
  }, [handleGetSolarInfo])

  const CheckLocation = useCallback(async () => {
    const value = await AsyncStorage.getItem('acessLocation')
    if (value !== null) {
      GetCurrentWeather()
    } else {
      navigation.navigate('AccessLocation')
    }
  }, [GetCurrentWeather, navigation])

  const CheckNetwork = useCallback(() => {
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) {
        return navigation.navigate('NoAccessNetwork')
      }

      CheckLocation()
    })
  }, [CheckLocation, navigation])

  useEffect(() => {
    CheckNetwork()
  }, [CheckNetwork, navigation])

  return (
    <>
      <Modal
        title="Opss.."
        description="Desculpe-nos, atualmente estamos enfrentando dificuldades para acessar os dados solicitados. Por favor, tente novamente em um momento posterior."
        show={modalError}
        singleAction={{
          title: 'Sair',
          action() {
            setModalError(false)
            BackHandler.exitApp()
          },
        }}
      />
      <View className="flex-1 items-center justify-center bg-blue-500">
        <AnimatedLottieView
          source={splashJson}
          autoPlay
          loop
          resizeMode="contain"
          style={{ width: size, height: size }}
        />
      </View>
    </>
  )
}
