import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from "./Principal";
import Profile from "./Profile";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from '../style'

const Tab = createBottomTabNavigator()

export default function Tabs (){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#f58b6b'
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#eccec0'
            }}
        >
            <Tab.Screen
                name ="Principal"
                component={Principal} 
                options={{
                    headerShown: false, 
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" color='{color}' size= {size}/>
                    )
                }}
            />
            <Tab.Screen
                name ="Profile"
                component={Profile} 
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="person" color='#fff' size= {20} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}




