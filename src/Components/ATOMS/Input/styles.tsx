import styled from 'styled-components/native'
import {TInputContainer} from '@/types'
import {Platform} from 'react-native'
import {Input} from 'native-base'


export const InputWrapper = styled.View<TInputContainer>`
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: ${({height}) => height ? height : '65px'};
    gap: 5px;
`
export const GenericInput = styled(Input)`
    width: 80%;
    height: ${Platform.OS === 'ios' ? '45px' : Platform.OS === 'android' ? '35px' : '30px' };
    padding: 6px;
    border: 0.5px solid black;
    border-radius: 5px;
`