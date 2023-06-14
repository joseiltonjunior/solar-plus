/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import { Routes } from '@routes/routes'
import theme from '@theme/index'

import '@config/ReactotronConfig'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.Light}
        />

        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
