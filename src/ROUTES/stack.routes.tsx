import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '@/pages/login'
import SignUp from '@/pages/signUp'
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
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
