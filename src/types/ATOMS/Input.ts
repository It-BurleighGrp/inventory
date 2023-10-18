export type TInput = {
  label: string
  placeholder: string
  type?: TTextType
  value: string
  onChangeText: (text: string) => void
}

export enum TTextType {
  text = 'text',
  password = 'password',
}

export type TInputContainer = {
  height: string
  width: string
}
