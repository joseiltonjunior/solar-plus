import AnimatedLottieView from 'lottie-react-native'
import splashJson from '@assets/splash.json'
import { Dimensions, View } from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '@routes/routes'

const size = Dimensions.get('window').width * 0.9

export function SplashScreen() {
  const navigation = useNavigation<StackNavigationProps>()

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    }, 5000)
  }, [navigation])

  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <AnimatedLottieView
        source={splashJson}
        autoPlay
        loop
        resizeMode="contain"
        style={{ width: size, height: size }}
      />
    </View>
  )
}
