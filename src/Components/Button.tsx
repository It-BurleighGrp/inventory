import { ITextProps} from "native-base"
import { ReactNode } from "react"
import { Button } from 'native-base'

interface ButtonProps extends ITextProps {
    children: ReactNode
}
export function Botao({ children, ...rest }: ButtonProps){
    return (
        <Button   
        // onPress={()=> {push('./Menu')}}         
        w="100%"
        bg='blue.800'
        marginTop={5}
        borderRadius="lg"
        >
          {children}
        </Button>
    )
}