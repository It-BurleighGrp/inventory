import React from 'react'
import * as Styles from './styles'
import { TButton } from '@/types'

export function ButtonGeneral({ onPress, title, color}: TButton) {
  return <Styles.Button title={title} onPress={onPress} color={color} />
}
