import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '@screens/Home'

const Auth = createStackNavigator()

export function Routes() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
  )
}
