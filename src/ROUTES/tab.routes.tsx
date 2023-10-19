import React from 'react'
import InventoryForm from '@/pages/newItemInventory'
// import InventoryForm from '@/Tabs/FormsInventory'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from '@/Tabs/Principal'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Qrcode from '@/Tabs/Qrcode'
// import Profile from '@/Tabs/Profile'
import Scan from '@/Tabs/Scan'
// import FakeList from '@/Tabs/FakeList'

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
        name="Scan"
        component={Scan}
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
