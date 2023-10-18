import React, { useState } from 'react'
import { Text } from 'native-base'
import * as Styles from './styles'
import { ButtonGeneral, InputGeneral } from '@/Components'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { TTextType } from '@/types'
import { useForm, Controller } from 'react-hook-form'
import { Pattern } from 'react-native-svg'

export function LoginForm() {
  const navigation = useNavigation()
  const [handleEmailInput, sethandleEmailInput] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  function validadeEmail(email) {
    // console.warn('ESTE >>>>', email)
    if (reg.test(email)) {
      // console.warn('TESTANDO O REGEX AQUI')
      navigation.navigate('modules', { screen: 'Principal' })
    } else {
      console.warn('Invalid E-mail. Please insert a valid e-mail')
    }
  }

  return (
    <Styles.LoginContainer>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required field!',
          },
          pattern: {
            value: reg,
            message: 'Invalid email',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <InputGeneral
            placeholder="Login with your e-mail account"
            label="E-mail"
            width="100%"
            height="595px"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <InputGeneral
            placeholder="Password"
            label="Password"
            type={TTextType.password}
            height=""
            width="" // shadow={3}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      {errors.password && <Text>This is required.</Text>}

      <View style={{ width: '100%' }}>
        <ButtonGeneral
          title="Login"
          color="#f58b6b"
          onPress={handleSubmit((data) => {
            console.warn(data)
          })}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </ButtonGeneral>
      </View>
    </Styles.LoginContainer>
  )
}
