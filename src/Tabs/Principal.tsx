import { Text, VStack, ITextProps, Button, Image, FormControl, Box, Input, Link, Center, ScrollView , Divider} from "native-base";
import { useState, ReactNode, useEffect } from 'react';
import {styles} from '../style';
import { TouchableOpacity, StyleSheet, Modal, Alert, Pressable, View } from 'react-native';
import Logo from '../assets/Flockdlogo.png';
import {TList} from '../types'
import { useFonts } from 'expo-font'
import Modalpage from '../Modal/ItensProperty'

export default function Principal({navigation}) {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [itemSelect, setItemSelect] = useState({} as TList)

    const [fontsLoaded] = useFonts({
        'Nunito': require('../assets/Fonts/Nunito-VariableFont_wght.ttf'),
      })
    const [inventory, setInventory] = useState<TList[]>([])
    useEffect(() => {
        // const teste = fetch('https://reactnative.dev/movies.json')
        const teste = fetch('https://d6b8-163-47-49-182.ngrok-free.app/items')
        .then((response) => response.json()) 
        .then ((data) => setInventory(data))
        .catch((error) => {console.warn('TESTANDO....', error)})
        // console.warn(teste)
    },[])
    // console.warn(inventory)
    return (
      <ScrollView flex={1} p={5} marginBottom='5' >
            <Image source={Logo} alt="Logo Flockd" />
            { !isModalVisible ?(
            <>
                <Text 
                    fontFamily='Nunito'
                    marginBottom="5" 
                    textAlign="center" 
                    fontSize='30'
                    fontWeight="bold" 
                    color="blue.800"
                >
                    LIST
                </Text>    
                {inventory && inventory.map((item) => {
                    return(<Text 
                        fontFamily='Nunito'
                        fontWeight="bold"
                        color="gray.600"
                        fontSize='16'
                        margin='5'
                        onPress={() => {setItemSelect(item), setIsModalVisible(true)}}
                        // onPress={() => console.log(item)} 
                        key={item.id}>
                            {item.name} - {item.model}                            
                        </Text>
                        )                                       
                })}
            </>) : (
            <View style={stylesModal.centeredView}>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={isModalVisible}
                >
                  <View style={stylesModal.centeredView}>
                    <View style={stylesModal.modalView}>
                      <Text style={stylesModal.modalText}>Model: {itemSelect.model} {"\n"}
                      Name: {itemSelect.name}{"\n"}
                      Localization: {itemSelect.localization}{"\n"}
                      Other information: {itemSelect.others}{"\n"}
                      Price: {itemSelect.price}{"\n"}
                      Responsible: {itemSelect.responsible}{"\n"}
                      Serial: {itemSelect.serial}{"\n"}
                      Status: {itemSelect.status}{"\n"}
                      Type: {itemSelect.type}{"\n"}
                      </Text>
                      <Pressable
                        style={[stylesModal.button, stylesModal.buttonClose]}
                        onPress={() => setIsModalVisible(!isModalVisible)}>
                        <Text style={stylesModal.textStyle}>back</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              </View>
              )}                  
      </ScrollView>
    );
  }

    // <Tab.Navigator tabs={props => <Tabs {...props} />}>
    //     {...}
    // </Tab.Navigator>
  
  const stylesModal = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   height: 50,
    //   backgroundColor: 'teal',
    //   marginTop: 22,
    },
    modalView: {
    //   margin: 20,
      width: '90%',
      height: '70%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 2,
    },
    button: {
      borderRadius: 10,
      marginTop: 200,
      padding: 10,
      width: '90%',
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#f58b6b',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  