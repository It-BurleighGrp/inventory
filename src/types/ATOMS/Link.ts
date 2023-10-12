import { ITextProps } from 'native-base'
import { ReactNode } from 'react'

export interface ILink extends ITextProps {
  children: ReactNode
  url: string
}
