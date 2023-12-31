import { Text, Image, ScrollView, Button } from 'native-base'
import { useState, useEffect } from 'react'
import { StyleSheet, Modal, Pressable, View } from 'react-native'
import Logo from '../assets/Flockdlogo.png'
import { TList } from '../types'
import { useNavigation } from '@react-navigation/native'

// import { useFonts } from 'expo-font'
// import Modalpage from '../Modal/ItensProperty'

export default function Principal() {
  const navigation = useNavigation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [itemSelect, setItemSelect] = useState({} as TList)

  // const [fontsLoaded] = useFonts({
  //   Nunito: require('../assets/Fonts/Nunito-VariableFont_wght.ttf'),
  // })
  const [inventory, setInventory] = useState<TList[]>([])

  useEffect(() => {
    // fetch('https://d6b8-163-47-49-182.ngrok-free.app/items')
    fetch('http://localhost:3334/items')
      .then((response) => response.json())
      .then((data) => setInventory(data))
      .catch((error) => {
        console.warn('TESTANDO....', error)
      })
  }, [])

  return (
    <ScrollView flex={1} p={5} marginBottom="5">
      <Image source={Logo} alt="Logo Flockd" />
      <Button
        w="100%"
        bg="blue.800"
        marginTop={5}
        borderRadius="lg"
        // @ts-ignore
        onPress={() => navigation.navigate('Routes')}
      >
        voltar
      </Button>
      {!isModalVisible ? (
        <>
          <Text
            fontFamily="Nunito"
            marginBottom="5"
            textAlign="center"
            fontSize="30"
            fontWeight="bold"
            color="blue.800"
          >
            LIST
          </Text>
          {inventory?.map((item) => {
            return (
              <View key={item.id}>
                <Text
                  fontFamily="Nunito"
                  fontWeight="bold"
                  color="gray.600"
                  fontSize="16"
                  margin="5"
                  onPress={() => {
                    setItemSelect(item)
                    setIsModalVisible(true)
                  }}
                  key={item.id}
                >
                  {item.name} - {item.model}
                </Text>
              </View>
            )
          })}
        </>
      ) : (
        <View style={stylesModal.centeredView}>
          <Modal animationType="fade" transparent visible={isModalVisible}>
            <View style={stylesModal.centeredView}>
              <View style={stylesModal.modalView}>
                <Text style={stylesModal.modalText}>
                  Model: {itemSelect.model} {'\n'}
                  Name: {itemSelect.name}
                  {'\n'}
                  Localization: {itemSelect.localization}
                  {'\n'}
                  Other information: {itemSelect.others}
                  {'\n'}
                  Price: {itemSelect.price}
                  {'\n'}
                  Responsible: {itemSelect.responsible}
                  {'\n'}
                  Serial: {itemSelect.serial}
                  {'\n'}
                  Status: {itemSelect.status}
                  {'\n'}
                  Type: {itemSelect.type}
                  {'\n'}
                </Text>
                <Pressable
                  style={[stylesModal.button, stylesModal.buttonClose]}
                  onPress={() => setIsModalVisible(!isModalVisible)}
                >
                  <Text style={stylesModal.textStyle}>back</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </ScrollView>
  )
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
})
