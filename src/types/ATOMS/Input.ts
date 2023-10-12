import { ITextProps } from 'native-base'

export interface IInput extends ITextProps {
  label: string
  placeholder: string
  type?: TTextType
}

export enum TTextType {
  text = 'text',
  password = 'password',
}
