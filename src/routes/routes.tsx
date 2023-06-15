import React from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

import { Home } from '@screens/Home'
import { AcessLocation } from '@screens/AcessLocation'

type RootStackParamList = {
  Home: undefined
  AcessLocation: undefined
}

export type StackNavigationProps = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator()

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AcessLocation" component={AcessLocation} />
    </Stack.Navigator>
  )
}
