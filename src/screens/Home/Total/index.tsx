import { Text, View } from 'react-native'

interface TotalProps {
  kwhToday?: number
  kwhMonth?: number
  kwhYear?: number
}

export function Total({ kwhMonth, kwhToday, kwhYear }: TotalProps) {
  return (
    <View className="bg-white rounded flex-row justify-between items-center p-2 mt-2">
      <View className="justify-center items-center flex-1 border-r border-blue-500/50">
        <Text className="font-bold text-gray-950">Hoje</Text>
        <Text className="mt-1 font-semibold">{kwhToday}KWh</Text>
      </View>
      <View className="justify-center items-center flex-1 border-r border-blue-500/50">
        <Text className="font-bold text-gray-950">Este mês</Text>
        <Text className="mt-1 font-semibold">{kwhMonth}KWh</Text>
      </View>
      <View className="justify-center items-center flex-1">
        <Text className="font-bold text-gray-950">Este ano</Text>
        <Text className="mt-1 font-semibold">{kwhYear}KWh</Text>
      </View>
    </View>
  )
}
