/* eslint-disable react/require-default-props */
import { FormControl, Input, Text } from 'native-base'
import { TInput } from '@/types'
import * as Styles from './styles'
import React from 'react'

export function InputGeneral({ label, placeholder, height, width, type }: TInput) {
  return (
    <Styles.InputWrapper>
      <Text>{label}</Text>
      <Styles.GenericInput placeholder={placeholder} type={type} />
    </Styles.InputWrapper>
  )
}
