import { VStack, Image, Text, Box, Link } from 'native-base'
import Logo from '../src/assets/Flockdlogo.png'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
import { LoginForm } from '@/Components'

// import { useNavigation } from '@react-navigation/native'

export default function Login({ navigation }) {
  // const navigation = useNavigation()
  return (
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
            {' '}
            Create your account
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  )
}
