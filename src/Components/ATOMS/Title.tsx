import { Text } from 'native-base'
import { ITitle } from '@/types'

export function Title({ children, ...rest }: ITitle) {
  return (
    <Text
      fontSize="lg"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      marginTop={5}
      {...rest}
    >
      {children}
    </Text>
  )
}
