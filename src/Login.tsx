import React from 'react'
import { VStack, Image, Text, Box, Link } from 'native-base'
import Logo from '../src/assets/Flockdlogo.png'
import { TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './style'
import { LoginForm, MasterContainer } from '@/Components'


export default function Login({ navigation }) {
  return (
    <MasterContainer>
      <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
        <Image source={Logo} alt="Logo Flockd" />
        <LoginForm />
        <Link href="https://gmail.com" marginTop={2}>
          Forgot your Password?
        </Link>
        <Box style={styles.box}>
          <Text>Still do not have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Text color="blue.500" fontWeight="bold">
              Create your account
            </Text>
          </TouchableOpacity>
        </Box>
      </VStack>
    </MasterContainer>
  )
}
