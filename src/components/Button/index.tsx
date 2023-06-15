import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import theme from '@theme/index'

import { Container, TextButtom } from './styles'

interface ButtonCustomProps extends TouchableOpacityProps {
  children: string
  isLoading?: boolean
}

export function Button({ children, isLoading, ...rest }: ButtonCustomProps) {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.Gray_500} />
      ) : (
        <TextButtom>{children}</TextButtom>
      )}
    </Container>
  )
}
