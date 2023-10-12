import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '@/Login'
import TabRoutes from './tab.routes'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="modules"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
