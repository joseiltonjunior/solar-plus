import logo from '@assets/logo-slim.png'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import { useDispatch } from 'react-redux'
import colors from 'tailwindcss/colors'
import { showMenu } from '@storage/menu/action'

export function Header() {
  const dispatch = useDispatch()

  return (
    <View className="flex-row p-4 items-center">
      <View className="flex-row gap-2 items-center ml-auto">
        <Image source={logo} alt="Solar+ logo" className="w-10 h-10" />
        <Text className="font-bold text-2xl text-blue-500">Solar+</Text>
      </View>

      <TouchableOpacity
        className="ml-auto"
        onPress={() => dispatch(showMenu())}
      >
        <AwesomeIcon name="navicon" size={28} color={colors.blue[400]} />
      </TouchableOpacity>
    </View>
  )
}
