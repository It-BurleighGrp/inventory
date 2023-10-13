import { ITextProps } from 'native-base'

export type TInput = {
  label: string
  placeholder: string
  type?: TTextType
  height: number | string
  width: number | string
}

export enum TTextType {
  text = 'text',
  password = 'password',
}

export type TInputContainer = Pick<TInput, 'height'| 'width'>
