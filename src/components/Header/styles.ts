import theme from '@theme/index'
import { responsiveSize } from '@utils/responsive'
import styled from 'styled-components/native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

export const Content = styled.View`
  padding: ${responsiveSize(30)}px ${responsiveSize(16)}px;
  flex: 1;
  justify-content: space-between;
`

export const TextValueKWp = styled.Text`
  font-size: ${responsiveSize(32)}px;
  font-family: ${theme.font_family.Bold};
  color: ${theme.colors.Light};
`

export const TextKWp = styled.Text`
  font-size: ${responsiveSize(14)}px;
  color: ${theme.colors.Light};
  margin-bottom: ${responsiveSize(5)}px;
`

export const KWpInfo = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;

  padding: ${responsiveSize(5)}px ${responsiveSize(10)}px;
  border-radius: 6px;
`

export const RowContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const Background = styled.ImageBackground`
  height: ${responsiveSize(200)}px;
`

export const UpdateInfo = styled.Text`
  margin: auto auto 0;
  text-align: center;
  color: ${theme.colors.Light};
  background-color: rgba(1, 1, 1, 0.7);
  padding: ${responsiveSize(5)}px;
  font-size: ${responsiveSize(11)}px;
  width: 100%;
`
export const LocationView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${responsiveSize(12)}px;
  padding: ${responsiveSize(5)}px;
  border-radius: ${responsiveSize(6)}px;
`

export const Location = styled.Text`
  font-family: ${theme.font_family.Bold};
  font-size: ${theme.font_size.sm}px;
  color: ${theme.colors.Light};
`

export const Climate = styled.Text`
  font-size: ${responsiveSize(28)}px;
  font-family: ${theme.font_family.Regular};
  color: ${theme.colors.Light};
`
export const ClimateView = styled.View`
  padding: ${responsiveSize(5)}px;
  border-radius: ${responsiveSize(6)}px;
`
export const Icon = styled(AwesomeIcon).attrs({
  size: responsiveSize(25),
  color: theme.colors.Light,
})``
