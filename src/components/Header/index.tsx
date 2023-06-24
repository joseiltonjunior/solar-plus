import logo from '@assets/logo-light.png'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import { useDispatch } from 'react-redux'

import { showMenu } from '@storage/menu/action'

export function Header() {
  const dispatch = useDispatch()

  return (
    <View className="flex-row p-4 items-center bg-blue-400">
      <View className="flex-row gap-2 items-center ml-auto">
        <Image source={logo} alt="Solar+ logo" className="w-10 h-10" />
        <Text className="font-bold text-2xl text-white">Solar+</Text>
      </View>

      <TouchableOpacity
        className="ml-auto"
        onPress={() => dispatch(showMenu())}
      >
        <AwesomeIcon name="navicon" size={28} color={'#ffffff'} />
      </TouchableOpacity>
    </View>
  )
}
