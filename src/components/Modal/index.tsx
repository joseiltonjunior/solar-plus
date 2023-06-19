import React from 'react'
import { TouchableOpacity, View, ViewProps, Text } from 'react-native'

import { ModalView } from './styles'

interface ModalProps extends ViewProps {
  show: boolean
  title: string
  description: string

  singleAction?: {
    title: string
    action(): void
  }

  twoActions?: {
    textCancel: string
    actionCancel(): void
    textConfirm: string
    actionConfirm(): void
  }
}

export function Modal({
  show,
  title,
  description,
  twoActions,
  singleAction,
}: ModalProps) {
  return (
    <ModalView animationType="slide" transparent visible={show}>
      <View className="flex-1 bg-black/50 justify-center items-center p-4">
        <View className="bg-white w-full rounded-2xl p-4">
          <Text className="font-bold text-blue-500 text-lg text-center">
            {title}
          </Text>
          <Text className="text-gray-500 font-medium text-base mt-4 text-center">
            {description}
          </Text>

          <View className="flex-row mt-8">
            {twoActions && (
              <>
                <TouchableOpacity
                  onPress={twoActions.actionCancel}
                  className="flex-1 bg-red-600 h-12 rounded-lg items-center justify-center"
                >
                  <Text className="text-white font-bold text-base">
                    {twoActions.textCancel}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={twoActions.actionConfirm}
                  className="flex-1 bg-green-600 h-12 rounded-lg items-center justify-center ml-2"
                >
                  <Text className="text-white font-bold text-base">
                    {twoActions.textConfirm}
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {singleAction && (
              <TouchableOpacity
                onPress={singleAction.action}
                className="flex-1 bg-blue-500 h-12 rounded-lg items-center justify-center"
              >
                <Text className="text-white font-bold text-base">
                  {singleAction.title}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ModalView>
  )
}
