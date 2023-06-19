import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { PERMISSIONS, request, RESULTS, check } from 'react-native-permissions'
import { BackHandler, Image, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import locationIcon from '@assets/map.png'

import { Button } from '@components/Button'
import { Modal } from '@components/Modal'

import { StackNavigationProps } from '@routes/routes'

export function AcessLocation() {
  const [loading, setLoading] = useState(false)
  const [modalBlock, setModalBlock] = useState(false)
  const [modalDenied, setModalDenied] = useState(false)

  const navigation = useNavigation<StackNavigationProps>()

  function AllowLocation() {
    try {
      setLoading(true)
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(async (res) => {
        if (res === RESULTS.GRANTED) {
          setLoading(false)
          await AsyncStorage.setItem('acessLocation', 'true')
          navigation.reset({
            index: 0,
            routes: [{ name: 'Splash' }],
          })
        } else if (res === RESULTS.BLOCKED) {
          setLoading(false)
          setModalBlock(true)
        } else if (res === RESULTS.DENIED) {
          request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(
            async (resRequest) => {
              if (resRequest === RESULTS.GRANTED) {
                setLoading(false)
                await AsyncStorage.setItem('acessLocation', 'true')
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Splash' }],
                })
              } else {
                setLoading(false)
                setModalBlock(true)
              }
            },
          )
        }
      })
    } catch (error) {
      setLoading(false)
      setModalBlock(true)
    }
  }

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    )

    return () => backHandler.remove()
  }, [])

  return (
    <>
      <Modal
        title="Atenção"
        description="O Solar+ requer acesso ao GPS para fornecer funcionalidades precisas. No entanto, parece que você bloqueou as permissões de localização do aplicativo. Para continuar utilizando todos os recursos do Solar+, por favor, atualize as permissões de localização do aplicativo."
        show={modalBlock}
        singleAction={{
          title: 'Sair',
          action() {
            setModalBlock(false)
            BackHandler.exitApp()
          },
        }}
      />

      <Modal
        title="Acesso negado"
        description="O acesso à sua localização foi negado, mas é importante termos essa informação para que você possa aproveitar ao máximo todos os recursos oferecidos pelo Solar+. Por favor, conceda permissão de localização para que possamos continuar fornecendo uma experiência personalizada e útil para você."
        show={modalDenied}
        twoActions={{
          textCancel: 'Sair',
          textConfirm: 'Conceder',
          actionCancel() {
            setModalDenied(false)
            BackHandler.exitApp()
          },
          actionConfirm() {
            setModalDenied(false)
            AllowLocation()
          },
        }}
      />

      <View className="p-4 items-center justify-center flex-1">
        <View className="items-center">
          <Text className="font-bold text-gray-600 text-lg">
            Precisamos da sua localização
          </Text>
          <Text className="text-center text-base mt-4">
            Para fornecermos dados mais completos, por favor, permita o acesso à
            sua localização.
          </Text>
        </View>

        <Image source={locationIcon} alt="map icon" className="mt-12" />

        <Button
          className="mt-12 w-full"
          activeOpacity={0.5}
          isLoading={loading}
          onPress={() => {
            AllowLocation()
          }}
        >
          Permitir localização
        </Button>
      </View>
    </>
  )
}

export default AcessLocation
