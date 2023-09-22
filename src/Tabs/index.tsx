import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from "./Principal";
import Profile from "./Profile";

const Tab = createBottomTabNavigator()

export default function Tabs (){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name ="Principal"
                component={Principal} 
                options={{headerShown: false}}
            />
            <Tab.Screen
                name ="Profile"
                component={Profile} 
                options={{headerShown: false}}
            />
        </Tab.Navigator>
    )
}




