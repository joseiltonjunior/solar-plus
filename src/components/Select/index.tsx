import { useState } from 'react'
import { FlatList, Text, View, TouchableHighlight } from 'react-native'
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
  const [value, setValue] = useState<ItemSelectProps>({
    name: 'hora',
    value: 'hourly',
  })

  const filter = [
    { name: 'hora', value: 'hourly' },
    { name: 'dia', value: 'daily' },
    { name: 'mês', value: 'monthly' },
    { name: 'ano', value: 'yearly' },
  ]

  return (
    <View {...rest} className="rounded overflow-hidden">
      <TouchableHighlight
        underlayColor={'rgba(0,0,0,0.3)'}
        className="py-2 px-4 flex-row justify-between items-center bg-white "
        onPress={() => setIsVisible(!isVisible)}
      >
        <View className="flex-row justify-between items-center flex-1">
          <Text className="font-bold text-gray-600 text-base">
            Filtrar por {value.name}
          </Text>
          <AwesomeIcon name={isVisible ? `caret-up` : `caret-down`} />
        </View>
      </TouchableHighlight>

      {isVisible && (
        <FlatList
          className="rounded-b overflow-hidden bg-blue-400"
          scrollEnabled={false}
          data={filter}
          keyExtractor={(option) => option.name}
          renderItem={(option) => (
            <TouchableHighlight
              underlayColor={'rgba(0,0,0,0.3)'}
              className={`p-3 ${
                option.index + 1 !== filter.length && 'border-b border-white/50'
              } focus:bg-slate-600`}
              onPress={() => {
                setValue(option.item)
                onAction(option.item)
                setIsVisible(false)
              }}
            >
              <Text className="font-bold text-white">{option.item.name}</Text>
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  )
}
