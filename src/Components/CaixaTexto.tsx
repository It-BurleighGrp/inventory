import { ITextProps} from "native-base"
import { ReactNode } from "react"
import { FormControl, Input } from 'native-base'

interface CaixaTextoProps extends ITextProps {
    label: string
    placeholder: string
}
export function CaixaTexto({ label, placeholder, ...rest }: CaixaTextoProps){
    return (
        <FormControl mt={3}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
        placeholder={placeholder}
        size='lg'
        w="100%"
        borderRadius='lg'
        backgroundColor="gray.100"
        {...rest}
        // shadow={3}
        />        
      </FormControl>
    )
}