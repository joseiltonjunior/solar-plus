import styled from 'styled-components/native'

import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { responsiveSize } from '@utils/responsive'
import theme from '@theme/index'
// import iconCity from '@assets/city.svg'

export const Container = styled.View`
  padding: 0 ${responsiveSize(16)}px;
`

export const ScrollView = styled.ScrollView.attrs({
  flexGrow: 1,
  justifyContent: 'center',
})`
  background-color: ${theme.colors.Light};
`

export const ViewText = styled.View`
  margin-top: ${responsiveSize(20)}px;
`

export const Title = styled.Text`
  font-family: ${theme.font_family.Bold};
  font-size: ${theme.font_size.xl}px;
  text-align: center;
  color: ${theme.colors.Dark};
`

export const Text = styled.Text`
  font-family: ${theme.font_family.Regular};
  font-size: ${theme.font_size.md}px;
  text-align: center;
  color: ${theme.colors.Gray_500};

  margin-top: ${responsiveSize(16)}px;
`

export const ViewIcons = styled.View`
  align-items: center;
  margin-top: ${responsiveSize(50)}px;
`

export const Icon = styled(AwesomeIcon).attrs({
  size: responsiveSize(60),
  color: theme.colors.Yellow,
})`
  margin-bottom: ${responsiveSize(20)}px;
`

export const IconLocation = styled.Image``

export const ViewButtom = styled.View`
  margin-top: ${responsiveSize(50)}px;
`
