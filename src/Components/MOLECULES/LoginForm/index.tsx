import React from 'react'
import { FormControl, Box, Input, Button, Text } from 'native-base'
import * as Styles from './styles'
import { ButtonGeneral, InputGeneral } from '@/Components'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { TTextType } from '@/types'

export function LoginForm() {
  const navigation = useNavigation()
  return (
    <Styles.LoginContainer>
        <InputGeneral
          placeholder="Login with your e-mail account"
          label='E-mail'
          width="100%"
          height="595px"
        />
        <InputGeneral
          placeholder="Password"
          label="Password"
          type={TTextType.password}
          // shadow={3}
        />
        <View style={{ width:'100%'}}>
          <ButtonGeneral
            title="Login"
            color='#f58b6b'
            // @ts-ignore
            onPress={() => navigation.navigate('modules', { screen: 'Principal' })}
          >
            <Text style={{color:'white'}}>Login</Text>
          </ButtonGeneral>
        </View>
    </Styles.LoginContainer>
  )
}

