import styled from 'styled-components/native'
import { responsiveSize } from '@utils/responsive'
import { ScrollView } from 'react-native-gesture-handler'
import theme from '@theme/index'

export const ScrollViewContainer = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
})``

export const Container = styled.View.attrs({})`
  padding: ${responsiveSize(15)}px;
  background-color: #eee;
  flex: 1;
`
