import { VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import Logo from '../src/assets/Flockdlogo.png'
import { TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './style'
import { useNavigation } from '@react-navigation/native'


export default function Login({navigation}) {
  // const navigation = useNavigation()
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Flockd" />
      <Text 
      fontSize="lg"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      marginTop={5}
      >        
      Login:
      </Text>
        <Box>
          <FormControl mt={0}>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
            placeholder='Login with your e-mail account'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor="gray.100"
            // shadow={3}
            />
          </FormControl>

          <FormControl mt={3}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
            placeholder='Password'
            size='lg'
            w="100%"
            borderRadius='lg'
            backgroundColor="gray.100"
            // shadow={3}
            />
          </FormControl>
          </Box>
          <Button 
          w="100%"
          bg='blue.800'
          marginTop={5}
          borderRadius="lg"
          onPress={() => navigation.navigate('Tabs')}
          >
            log in
          </Button>
          <Link href='https://gmail.com' marginTop={2}>
          Forgot your Password?
          </Link>

          <Box style={styles.box}>
            <Text>Still don't have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Text
              color="blue.500"
              fontWeight="bold"
              > Create your account</Text>
            </TouchableOpacity>
          </Box>
    </VStack>
  );
}

