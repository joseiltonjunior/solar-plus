/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
import { store } from '@storage/index'

import { Routes } from '@routes/routes'

import '@config/ReactotronConfig'
import colors from 'tailwindcss/colors'

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.white} />

        <Routes />
      </NavigationContainer>
    </Provider>
  )
}

export default App
