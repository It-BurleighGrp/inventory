/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { Text, Icon } from 'native-base'
import { TInput, TTextType } from '@/types'
import * as Styles from './styles'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Platform } from 'react-native'

export function InputGeneral({
  label,
  placeholder,
  type,
  value,
  onChangeText,
}: TInput) {
  const [showPassword, setShowPassword] = useState(TTextType.password)
  // console.warn('este e o type', type)
  return (
    <Styles.InputWrapper>
      <Text>{label}</Text>
      {type === TTextType.password ? (
        <Styles.InputIconContainer>
          <Icon
            as={FontAwesome}
            name={showPassword === TTextType.password ? 'eye' : 'eye-slash'}
            size={5}
            style={{
              position: 'absolute',
              top:
                Platform.OS === 'ios' ? 15 : Platform.OS === 'android' ? 8 : 30,
              right: 20,
              zIndex: 5,
            }}
            onPress={() =>
              setShowPassword(
                showPassword === TTextType.password
                  ? TTextType.text
                  : TTextType.password
              )
            }
          />
          <Styles.GenericInput
            placeholder={placeholder}
            type={showPassword}
            onChangeText={onChangeText}
            value={value}
          />
        </Styles.InputIconContainer>
      ) : (
        <Styles.GenericInput
          placeholder={placeholder}
          type={type}
          onChangeText={onChangeText}
          value={value}
        />
      )}
    </Styles.InputWrapper>
  )
}
