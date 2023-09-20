import { ITextProps} from "native-base"
import { ReactNode } from "react"
import { Button } from 'native-base'

interface ButtonProps extends ITextProps {
    children: ReactNode
    onPress: any
}
export function Botao({ children, onPress, ...rest}: ButtonProps){
    return (
        <Button   
        onPress={onPress}         
        w="100%"
        bg='blue.800'
        marginTop={5}
        borderRadius="lg"
        >
          {children}
        </Button>
    )
}