import logo from '@assets/logo-slim.png'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import theme from '@theme/index'

export function Header() {
  return (
    <View className="flex-row p-4 items-center">
      <View className="flex-row gap-2 items-center ml-auto">
        <Image source={logo} alt="Solar+ logo" className="w-10 h-10" />
        <Text className="font-bold text-2xl text-[#4FACFE]">Solar+</Text>
      </View>

      <TouchableOpacity className="ml-auto">
        <AwesomeIcon name="navicon" size={28} color={theme.colors.Blue_500} />
      </TouchableOpacity>
    </View>
  )
}
