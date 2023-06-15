import styled from 'styled-components/native'
import { responsiveSize } from '@utils/responsive'
import { ScrollView } from 'react-native-gesture-handler'
import theme from '@theme/index'

export const ScrollViewContainer = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
})`
  background-color: ${theme.colors.Light};
`

export const Container = styled.View.attrs({})`
  flex: 1;
`

export const Overview = styled.View`
  padding: ${responsiveSize(15)}px;
`

export const Text = styled.Text`
  font-family: ${theme.font_family.Medium};
  color: ${theme.colors.Gray_700};
`
