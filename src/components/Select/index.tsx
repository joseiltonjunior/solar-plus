import { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

interface ItemSelectProps {
  name: string
  value: string
}

interface SelectProps {
  onAction(item: ItemSelectProps): void
  className?: string
}

export function Select({ onAction, ...rest }: SelectProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState<ItemSelectProps>()

  const filter = [
    { name: 'Por hora', value: 'hourly' },
    { name: 'Hoje', value: 'daily' },
    { name: 'Este mês', value: 'monthly' },
    { name: 'Este ano', value: 'yearly' },
  ]

  return (
    <View {...rest} className="rounded overflow-hidden">
      <TouchableOpacity
        className="py-2 px-4 flex-row justify-between items-center bg-white"
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text className="font-bold text-gray-950 text-base">
          {!value ? 'Filtrar por período' : value.name}
        </Text>
        <AwesomeIcon name={isVisible ? `caret-up` : `caret-down`} />
      </TouchableOpacity>

      {isVisible && (
        <FlatList
          className="rounded-b overflow-hidden bg-blue-500"
          scrollEnabled={false}
          data={filter}
          keyExtractor={(item) => item.name}
          renderItem={(item) => (
            <TouchableOpacity
              className={`p-3 ${
                item.index + 1 !== filter.length && 'border-b border-white/50'
              } `}
              onPress={() => {
                setValue(item.item)
                onAction(item.item)
                setIsVisible(false)
              }}
            >
              <Text className="font-medium text-white">{item.item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}
