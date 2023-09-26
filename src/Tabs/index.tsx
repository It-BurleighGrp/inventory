/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Principal from './Principal'
import Profile from './Profile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InventoryForm from '../FormsInventory'
import Qrcode from './Qrcode'

const Tab = createBottomTabNavigator()

export default function Tabs() {
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
        name="List"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add New"
        component={InventoryForm}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="QR Code"
        component={Qrcode}
        options={{
          headerShown: false,
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
