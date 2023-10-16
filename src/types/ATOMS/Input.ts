import { ITextProps } from 'native-base'
import { Image } from 'react-native-svg'

export type TInput = {
  label: string
  placeholder: string
  type?: TTextType
  height: number | string
  width: number | string
  onChangeText: (text: string) => void
}

export enum TTextType {
  text = 'text',
  password = 'password',
}

export type TInputContainer = Pick<TInput, 'height'| 'width'>
