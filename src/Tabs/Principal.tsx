/* eslint-disable no-undef */
import React from 'react'
import { Text, Image, ScrollView } from 'native-base'
import { ButtonGeneral, MasterContainer } from '@/Components'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Modal,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native'
import Logo from '../assets/Flockdlogo.png'
import { TList } from '../types'
import { useNavigation } from '@react-navigation/native'

export default function Principal() {
  const navigation = useNavigation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [itemSelect, setItemSelect] = useState({} as TList)
  const [inventory, setInventory] = useState<TList[]>([])

  useEffect(() => {
    // fetch('https://d6b8-163-47-49-182.ngrok-free.app/items')
    fetch('https://8584-163-47-49-182.ngrok-free.app/items')
      .then((response) => response.json())
      .then((data) => setInventory(data))
      .catch((error) => {
        // console.warn('TESTANDO....', error)
      })
  }, [])

  return (
    <MasterContainer>
      <ScrollView flex={1} p={5} marginBottom="5">
        <Image source={Logo} alt="Logo Flockd" />
        <TouchableOpacity
          onPress={() =>
            // @ts-ignore
            navigation.navigate('home')
          }
        >
          <Text
            textAlign="right"
            fontSize="lg"
            marginBottom="24px"
            fontWeight="bold"
            color="#f58b6b"
          >
            X
          </Text>
        </TouchableOpacity>
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
                <View
                  key={item.id}
                  style={{
                    backgroundColor: 'rgba(245, 139, 107, 0.6)',
                    marginBottom: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    fontFamily="Nunito"
                    fontWeight="bold"
                    color="white"
                    fontSize="16"
                    margin="5"
                    onPress={() => {
                      setItemSelect(item)
                      setIsModalVisible(true)
                    }}
                    key={item.id}
                  >
                    {item.name} - {item.model} | {item.status}
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
    </MasterContainer>
  )
}

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
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
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
})
