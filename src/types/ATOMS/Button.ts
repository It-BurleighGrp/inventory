/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { ITextProps } from 'native-base'

export interface TButton extends ITextProps {
  children: ReactNode
  onPress: any
}
