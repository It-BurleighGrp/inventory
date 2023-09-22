import { Text, VStack, ITextProps, Button, Image, FormControl, Box, Input, Link, Center } from "native-base";
import { useState, ReactNode } from 'react';
import {styles} from '../style';
import { TouchableOpacity, StyleSheet  } from 'react-native';
import Logo from '../assets/Flockdlogo.png';

export default function Principal({navigation}) {
    // const navigation = useNavigation()
    return (
      <VStack flex={1} alignItems="center" justifyContent="flexStart" p={5}>
        <Image source={Logo} alt="Logo Flockd" alignContent="" />
            <Button 
            w="100%"
            bg='blue.800'
            marginTop={5}
            borderRadius="lg"
            onPress={() => navigation.navigate('Tabs')}
            >
              log in
            </Button>           
      </VStack>
    );
  }
  
  