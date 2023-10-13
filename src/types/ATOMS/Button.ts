import {GestureResponderEvent} from 'react-native'

export type TButton = {
  onPress: (event: GestureResponderEvent) => void
  title: string
  color: string
}
