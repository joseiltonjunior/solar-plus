import { Modal } from '@components/Modal'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@routes/routes'
import { ReduxProps } from '@storage/index'
import { showMenu } from '@storage/menu/action'
import { useState } from 'react'

import { BackHandler, Text, View, TouchableHighlight } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export function Menu() {
  const navigation = useNavigation<StackNavigationProps>()

  const [modalLeaving, setModalLeaving] = useState(false)

  const isVisible = useSelector<ReduxProps, boolean>((state) => state.menu)

  const dispatch = useDispatch()

  return (
    <>
      <Modal
        title="Mas já 😢"
        description="Você realmente deseja sair?"
        show={modalLeaving}
        twoActions={{
          textCancel: 'Confimar',
          textConfirm: 'Cancelar',
          actionCancel() {
            setModalLeaving(false)
            BackHandler.exitApp()
          },
          actionConfirm() {
            setModalLeaving(false)
          },
        }}
      />
      <View
        className={` shadow-2xl shadow-gray-950 bg-blue-400 z-50 w-1/2 absolute top-20  right-4 rounded overflow-hidden ${
          !isVisible && `hidden`
        }`}
      >
        <TouchableHighlight
          underlayColor={'rgba(0,0,0,0.3)'}
          className="p-3 items-center"
          onPress={() => {
            dispatch(showMenu())
            navigation.navigate('Splash')
          }}
        >
          <Text className="font-bold text-base text-white">
            Atualizar dados
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'rgba(0,0,0,0.3)'}
          className="p-3 items-center border-t border-white/50"
          onPress={() => {
            dispatch(showMenu())
            setModalLeaving(true)
          }}
        >
          <Text className="font-bold text-base text-white">Sair do app</Text>
        </TouchableHighlight>
      </View>
    </>
  )
}
