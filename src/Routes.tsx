import React from "react"; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from "./Login";
import Menu from "./Menu";
import InventoryForm from "./FormsInventory";
import Tabs from "./Tabs";
import Principal from "./Tabs/Principal";

const Tab = createNativeStackNavigator();

export default function Rotas (){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Login" component={Login} options={{headerShown: false}}
                />
                <Tab.Screen 
                name="Menu" component={Menu} options={{headerShown: false}}
                />
                <Tab.Screen 
                name="InventoryForm" component={InventoryForm} options={{headerShown: false}}
                />
                <Tab.Screen 
                name="Tabs" component={Tabs} options={{headerShown: false}}
                />
                <Tab.Screen 
                name="Principal" component={Principal} options={{headerShown: false}}
                />
            </Tab.Navigator>

        </NavigationContainer>
    )
}