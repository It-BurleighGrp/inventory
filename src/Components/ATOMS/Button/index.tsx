import React, { ReactNode } from 'react'
import * as Styles from './styles'
import { TButton } from '@/types'

export function ButtonGeneral({
  onPress,
  color,
  children,
  width,
  height,
  backgroundColor,
}: TButton) {
  return (
    <Styles.Button
      backgroundColor={backgroundColor}
      onPress={onPress}
      color={color}
      width={width}
      height={height}
    >
      {children}
    </Styles.Button>
  )
}
