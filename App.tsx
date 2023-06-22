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

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden />

        <Routes />
      </NavigationContainer>
    </Provider>
  )
}

export default App
