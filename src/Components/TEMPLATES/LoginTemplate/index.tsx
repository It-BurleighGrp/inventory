import React from 'react'
import { Image, Text, Link } from 'native-base'
import Logo from '@/assets/Flockdlogo.png'
import { TouchableOpacity } from 'react-native'
import * as Styles from './styles'
import { LoginForm, MasterContainer } from '@/Components'
import { useNavigation } from '@react-navigation/native'

export function LoginTemplate() {
  const navigation = useNavigation()

  return (
    <MasterContainer>
      <Styles.Wrapper>
        <Image source={Logo} alt="Logo Flockd" />
        <LoginForm />
        <Link href="https://gmail.com" marginTop={2}>
          Forgot your Password?
        </Link>
        <Styles.LoginBox>
          <Text>Still do not have account?</Text>
          <TouchableOpacity onPress={() => 
            // @ts-ignore
            navigation.navigate('signup')
          }
          >
            <Text color="blue.500" fontWeight="bold">
              Create your account
            </Text>
          </TouchableOpacity>
        </Styles.LoginBox>
      </Styles.Wrapper>
    </MasterContainer>
  )
}
