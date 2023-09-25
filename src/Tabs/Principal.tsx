import { Text, VStack, ITextProps, Button, Image, FormControl, Box, Input, Link, Center, ScrollView } from "native-base";
import { useState, ReactNode, useEffect } from 'react';
import {styles} from '../style';
import { TouchableOpacity, StyleSheet  } from 'react-native';
import Logo from '../assets/Flockdlogo.png';

export default function Principal({navigation}) {
    // const navigation = useNavigation()
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        // const teste = fetch('https://reactnative.dev/movies.json')
        const teste = fetch('https://d6b8-163-47-49-182.ngrok-free.app/items')
        .then((response) => response.json()) 
        .then ((data) => setInventory(data))
        .catch((error) => {console.warn('TESTANDO....', error)})
        console.warn(teste)
    },[])
    console.warn(inventory)
    return (
      <ScrollView flex={1} p={5} >
            <Image source={Logo} alt="Logo Flockd" />
            <Text>LIST A SER INCLUIDA</Text>    
            {inventory && inventory.map((item) => {
                return(<Text key={item.id}>{item.name}</Text>)                
            })}      
      </ScrollView>
    );
  }
  
  