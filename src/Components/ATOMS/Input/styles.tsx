import styled from 'styled-components/native'
import {TInputContainer} from '@/types'


export const InputWrapper = styled.View<TInputContainer>`
    justify-content: flex-start;
    width: ${({width}) => width ? width : '100%' };
    height: ${({height}) => height ? height : '65px'};
    gap: 5px;
`
export const GenericInput = styled.TextInput`
    width: 80%;
    padding: 6px;
    border: 0.5px solid black;
    border-radius: 5px;
`