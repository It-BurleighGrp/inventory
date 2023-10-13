/* eslint-disable react/require-default-props */
import { FormControl, Input } from 'native-base'
import {Text} from 'react-native'
import { TInput } from '@/types'
import * as Styles from './styles'
import React from 'react'

export function InputGeneral({ label, placeholder, height, width }: TInput) {
  return (
    <Styles.InputWrapper>
      <Text>{label}</Text>
      <Styles.GenericInput placeholder={placeholder}/>
    </Styles.InputWrapper>
  )
}
