/* eslint-disable react/require-default-props */
import { FormControl, Input } from 'native-base'
import { IInput } from '@/types'

export function InputGeneral({ label, placeholder, type, ...rest }: IInput) {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        // parte que mudamos
        type={type}
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        backgroundColor="gray.100"
        {...rest}
        // shadow={3}
      />
    </FormControl>
  )
}
