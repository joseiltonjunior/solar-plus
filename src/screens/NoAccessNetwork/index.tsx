import { BackHandler, Image, Text, View } from 'react-native'
import netWorkIcon from '@assets/sem-wi-fi.png'
import { Button } from '@components/Button'

export function NoAccessNetwork() {
  return (
    <View className="bg-white p-4 items-center justify-center flex-1">
      <View className="items-center">
        <Text className="font-bold text-blue-500 text-xl">
          Sem acesso a internet
        </Text>
        <Text className="text-center text-base mt-4 font-medium">
          O aplicativo Solar+ requer uma conexão com a internet para funcionar
          adequadamente. Por favor, verifique sua conexão e tente novamente.
        </Text>
      </View>

      <Image source={netWorkIcon} alt="map icon" className="mt-12 h-52 w-52" />

      <Button
        className="mt-12 w-full"
        activeOpacity={0.5}
        onPress={() => {
          BackHandler.exitApp()
        }}
      >
        Sair
      </Button>
    </View>
  )
}
