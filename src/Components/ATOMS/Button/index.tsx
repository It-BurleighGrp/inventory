import React, { ReactNode } from 'react'
import * as Styles from './styles'
import { TButton } from '@/types'

export function ButtonGeneral({ onPress, color, children }: TButton) {
  return (
    <Styles.Button backgroundColor={color} onPress={onPress} color={color}>
      {children}
    </Styles.Button>
  )
}
