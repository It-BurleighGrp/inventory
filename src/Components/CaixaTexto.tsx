/* eslint-disable react/require-default-props */
import { ITextProps } from 'native-base'
import { FormControl, Input } from 'native-base'

interface CaixaTextoProps extends ITextProps {
  label: string
  placeholder: string
  type?: type
}
// parte que mudamos
enum type {
  text = 'text',
  password = 'password',
}
export function CaixaTexto({
  label,
  placeholder,
  type,
  ...rest
}: CaixaTextoProps) {
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
