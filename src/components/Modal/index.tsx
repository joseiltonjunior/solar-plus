import React from 'react'
import { ViewProps } from 'react-native'

import {
  Container,
  Card,
  Info,
  Title,
  Text,
  DynamicButton,
  ViewButtons,
  ModalView,
} from './styles'

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
      <Container>
        <Card>
          <Title>{title}</Title>
          <Info>{description}</Info>

          <ViewButtons>
            {twoActions && (
              <>
                <DynamicButton
                  onPress={twoActions.actionCancel}
                  variant="cancel"
                >
                  <Text>{twoActions.textCancel}</Text>
                </DynamicButton>

                <DynamicButton
                  onPress={twoActions.actionConfirm}
                  variant="confirm"
                >
                  <Text>{twoActions.textConfirm}</Text>
                </DynamicButton>
              </>
            )}

            {singleAction && (
              <DynamicButton onPress={singleAction.action}>
                <Text>{singleAction.title}</Text>
              </DynamicButton>
            )}
          </ViewButtons>
        </Card>
      </Container>
    </ModalView>
  )
}
