import React, { useState } from 'react'
import { Text } from 'native-base'
import * as Styles from './styles'
import { ButtonGeneral, InputGeneral } from '@/Components'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { TTextType } from '@/types'

export function LoginForm() {
  const navigation = useNavigation()
  const [handleEmailInput, sethandleEmailInput] = useState('')

  function validadeEmail(email) {
    // console.warn('ESTE >>>>', email)
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (reg.test(email)) {
      // console.warn('TESTANDO O REGEX AQUI')
      navigation.navigate('modules', { screen: 'Principal' })
    } else {
      console.warn('Invalid E-mail. Please insert a valid e-mail')
    }
  }

  return (
    <Styles.LoginContainer>
      <InputGeneral
        placeholder="Login with your e-mail account"
        label="E-mail"
        width="100%"
        height="595px"
        onChangeText={(text) => {
          sethandleEmailInput(text)
        }}
      />
      <InputGeneral
        placeholder="Password"
        label="Password"
        type={TTextType.password}
        height=""
        width="" // shadow={3}
      />
      <View style={{ width: '100%' }}>
        <ButtonGeneral
          title="Login"
          color="#f58b6b"
          onPress={() =>
            // @ts-ignore
            validadeEmail(handleEmailInput)
          }
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </ButtonGeneral>
      </View>
    </Styles.LoginContainer>
  )
}
