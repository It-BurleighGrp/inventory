import { VStack, Image, Text, Box, FormControl, Input, Button, Link, ScrollView,Checkbox} from 'native-base';
import Logo from '../src/assets/Flockdlogo.png';
import { TouchableOpacity, StyleSheet  } from 'react-native';
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
import { useNavigation } from '@react-navigation/native'
import { SelectList } from 'react-native-dropdown-select-list'

// const Stack = createNativeStackNavigator();
export default function Menu({navigation}) {
  const [numSecao, setNumSecao] = useState(0);

  // const App = () => {

  //   const [selected, setSelected] = useState("");
    
  //   const data = [
  //       {key:'1', value:'Mobiles', disabled:true},
  //       {key:'2', value:'Appliances'},
  //       {key:'3', value:'Cameras'},
  //       {key:'4', value:'Computers', disabled:true},
  //       {key:'5', value:'Vegetables'},
  //       {key:'6', value:'Diary Products'},
  //       {key:'7', value:'Drinks'},
  //   ]
  
  //   return(
  //     <SelectList 
  //         setSelected={(val) => setSelected(val)} 
  //         data={data} 
  //         save="value"
  //     />
  //   )
  
  // };

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
              return <CaixaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} type={entrada.type?entrada.type:'text'}/>
            })
          }

          </Box>
          <Box>
          {
            secoes[numSecao]?.checkbox?.map(checkbox => {
              return <Checkbox key={checkbox.id} value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
            })
          }

          </Box>
          {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
          {numSecao !== 2 && <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>}
          {numSecao === secoes.length -1 && <Botao onPress={() => navigation.navigate('InventoryForm')} bgColor="gray.400">Go to Inventory</Botao>}

  </ScrollView>
  );
// }
}

