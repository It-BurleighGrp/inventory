import { Text, VStack, ITextProps, Button, Image, FormControl, Box, Input, Link, Center, ScrollView } from "native-base";
import { useState, ReactNode, useEffect } from 'react';
import {styles} from '../style';
import { TouchableOpacity, StyleSheet  } from 'react-native';
import Logo from '../assets/Flockdlogo.png';

export default function Principal({navigation}) {
    // const navigation = useNavigation()
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        const teste = fetch('localhost:3334/items')
        .then((response) => {response.json()})
        .catch((error) => {console.warn('TESTANDO....', error)})
        console.warn(teste)
    },[])
    return (
      <ScrollView flex={1} p={5} >
            <Image source={Logo} alt="Logo Flockd" />
            <Text>LIST A SER INCLUIDA</Text>          
      </ScrollView>
    );
  }
  
  