import styled from 'styled-components/native'
import {Button as StyledButton} from 'native-base'

type TButton = {
    backgroundColor: string
}


export const Button = styled(StyledButton)<TButton>`
    width: 100%;
    height:45px;
    border-radius: 6px;
    background-color: ${({backgroundColor}) => backgroundColor};
    padding:6px;
`
