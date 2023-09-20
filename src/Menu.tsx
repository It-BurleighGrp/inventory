import { VStack, Image, Text, Box, FormControl, Input, Button, Link, ScrollView} from 'native-base';
import Logo from '../src/assets/Flockdlogo.png';
import { TouchableOpacity, StyleSheet, View  } from 'react-native';
import { useState } from 'react';
import {styles} from './style';
//import {useRouter, useNavigation} from 'expo-router'
//import { NavigationContainer } from '@react-navigation/native'
//import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Titulo } from './Components/Titulo';
import { CaixaTexto } from './Components/CaixaTexto';
import { Botao } from './Components/Button';
import { Url } from './Components/Link';
import { secoes } from '../src/utils/CadastroEntradaTexto';

// const Stack = createNativeStackNavigator();
export default function Menu() {
  const [numSecao, setNumSecao] = useState(0);

   function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Flockd"/>
        <Titulo >
          {secoes[numSecao].titulo}
        </Titulo>
        <Box>
          {
            secoes[numSecao]?.entradaTexto?.map(entrada => {
              return <CaixaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
            })
          }

          </Box>
          {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
          <Botao onPress={avancarSecao} mt={4} mb={20}>Avançar</Botao>

      
           {/*  <Text>Teste aqui {numSecao}</Text>
            <Button
            onPress={()=> teste()}
            >Click me!!!</Button> */}
          

  </ScrollView>
  );
// }
}

