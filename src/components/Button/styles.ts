import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { responsiveSize } from '@utils/responsive'

import theme from '@theme/index'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${responsiveSize(55)}px;
  background-color: ${theme.colors.Blue_500};

  justify-content: center;
  border-radius: 8px;
  align-self: center;
`

export const TextButtom = styled.Text`
  font-family: 'Roboto-Bold';
  color: ${theme.colors.Light};
  font-size: ${responsiveSize(16)}px;
  text-align: center;
`
