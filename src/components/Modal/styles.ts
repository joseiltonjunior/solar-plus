import styled from 'styled-components/native'

import { responsiveSize } from '@utils/responsive'
import theme from '@theme/index'

interface DynamicButtonProps {
  variant: 'cancel' | 'confirm'
}

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${responsiveSize(16)}px;
`

export const Card = styled.View`
  width: 100%;
  background-color: ${theme.colors.Light};
  border-radius: 8px;
  padding: ${responsiveSize(16)}px;
  justify-content: center;
  align-self: center;
  position: relative;
`

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: ${responsiveSize(18)}px;
  color: ${theme.colors.Blue_500};
  align-self: center;
  text-align: center;
  margin-bottom: ${responsiveSize(20)}px;
`

export const Info = styled.Text`
  color: ${theme.colors.Gray_500};
  font-family: 'Roboto-Regular';
  font-size: ${responsiveSize(16)}px;
  text-align: center;
`

export const DynamicButton = styled.TouchableOpacity<DynamicButtonProps>`
  flex: 1;
  height: ${responsiveSize(50)}px;
  background-color: ${(props: DynamicButtonProps) =>
    props.variant === 'cancel'
      ? theme.colors.Red_600
      : props.variant === 'confirm'
      ? theme.colors.Green_400
      : theme.colors.Blue_500};
  border-radius: 8px;
  justify-content: center;
`

export const ViewButtons = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: ${responsiveSize(30)}px;
  align-self: center;
`

export const Text = styled.Text`
  align-self: center;
  font-family: 'Roboto-Bold';
  font-size: ${responsiveSize(16)}px;
  color: ${theme.colors.Light};
`

export const ModalView = styled.Modal``
