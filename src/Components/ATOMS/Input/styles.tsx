/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native'
import { TIcon, TInputContainer } from '@/types'
import { Platform } from 'react-native'
import { Input } from 'native-base'

export const InputWrapper = styled.View<TInputContainer>`
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: ${({ height }) => height || '65px'};
  gap: 5px;
`
export const GenericInput = styled(Input)`
  width: 80%;
  height: ${Platform.OS === 'ios'
    ? '45px'
    : Platform.OS === 'android'
    ? '40px'
    : '30px'};
  padding: 6px 20px;
  border: 0.5px solid black;
  border-radius: 5px;
`

export const InputIconContainer = styled.View`
  z-index: 3;
  width: 100%;
  position: relative;
`
