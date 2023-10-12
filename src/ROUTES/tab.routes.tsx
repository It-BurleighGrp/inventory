import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Menu from '@/Menu'
import InventoryForm from '@/FormsInventory'
// import Tabs from './Tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from '@/Tabs/Principal'
import Modalpage from '@/Modal/ItensProperty'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Qrcode from '@/Tabs/Qrcode'
import Profile from '@/Tabs/Profile'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f58b6b',
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#eccec0',
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InventoryForm"
        component={InventoryForm}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
