import React from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

import { RouteProp } from '@react-navigation/native'

import { Home } from '@screens/Home'
import { AcessLocation } from '@screens/AcessLocation'
import { SplashScreen } from '@screens/Splash'
import { LocaleInfoProps } from '@utils/types/locale'
import { SolarInfoProps } from '@utils/types/solar'

type RootStackParamList = {
  Splash: undefined
  Home: {
    localeInfo: LocaleInfoProps
    solarInfoHourly: SolarInfoProps
    solarInfoDaily: SolarInfoProps
    solarInfoMonthly: SolarInfoProps
    solarInfoYearly: SolarInfoProps
  }
  AcessLocation: undefined
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
      <Stack.Screen name="AcessLocation" component={AcessLocation} />
    </Stack.Navigator>
  )
}
