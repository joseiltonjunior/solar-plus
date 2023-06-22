import React from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

import { RouteProp } from '@react-navigation/native'

import { Home } from '@screens/Home'
import { AccessLocation } from '@screens/AccessLocation'
import { SplashScreen } from '@screens/Splash'
import { LocaleInfoProps } from '@utils/types/locale'
import { SolarInfoProps } from '@utils/types/solar'
import { NoAccessNetwork } from '@screens/NoAccessNetwork'

type RootStackParamList = {
  Splash: undefined
  Home: {
    localeInfo: LocaleInfoProps
    solarInfoHourly: SolarInfoProps
    solarInfoDaily: SolarInfoProps
    solarInfoMonthly: SolarInfoProps
    solarInfoYearly: SolarInfoProps
  }
  AccessLocation: undefined
  NoAccessNetwork: undefined
}

export type StackNavigationProps = StackNavigationProp<RootStackParamList>
export type RouteParamsProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>

const Stack = createStackNavigator<RootStackParamList>()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AccessLocation" component={AccessLocation} />
      <Stack.Screen name="NoAccessNetwork" component={NoAccessNetwork} />
    </Stack.Navigator>
  )
}
