import { FormControl, Box, Input, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export function LoginForm() {
  const navigation = useNavigation()
  return (
    <Box>
      <FormControl mt={0}>
        <FormControl.Label>E-mail</FormControl.Label>
        <Input
          placeholder="Login with your e-mail account"
          size="lg"
          w="100%"
          borderRadius="lg"
          backgroundColor="gray.100"
        />
      </FormControl>
      <FormControl mt={3}>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          placeholder="Password"
          size="lg"
          w="100%"
          borderRadius="lg"
          backgroundColor="gray.100"
          // shadow={3}
        />
      </FormControl>
      <Button
        w="100%"
        bg="blue.800"
        marginTop={5}
        borderRadius="lg"
        // @ts-ignore
        onPress={() => navigation.navigate('modules', { screen: 'Principal' })}
      >
        log in
      </Button>
    </Box>
  )
}
