/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITextProps } from 'native-base'
import { ReactNode } from 'react'
import { Button } from 'native-base'

interface ButtonProps extends ITextProps {
  children: ReactNode
  onPress: any
}
export function Botao({ children, onPress, ...rest }: ButtonProps) {
  return (
    <Button
      // onPress={()=> {push('./Menu')}}
      w="100%"
      bg="blue.800"
      marginTop={5}
      borderRadius="lg"
      onPress={onPress}
    >
      {children}
    </Button>
  )
}
