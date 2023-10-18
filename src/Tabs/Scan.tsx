/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import { IStackScreenprops } from '@/Library/IStackScreenProps'
import { IQRCodePayload } from '@/Library/IQRCodePayload'
import { TList } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ScanScreen: React.FunctionComponent<IStackScreenprops> = (props) => {
  const [loading, setLoading] = useState(true)
  const [scanData, setScanData] = useState<IQRCodePayload>()
  const [permission, setPermission] = useState(true)
  const [itemSelect, setItemSelect] = useState({} as TList)

  useEffect(() => {
    requestCameraPermission()
  }, [])

  const requestCameraPermission = async () => {
    try {
      const { status, granted } = await BarCodeScanner.requestPermissionsAsync()
      console.log(`Status: ${status}, Granted: ${granted}`)

      if (status === 'granted') {
        console.log('Access granted')
        setPermission(true)
      } else {
        setPermission(false)
      }
    } catch (error) {
      console.error(error)
      setPermission(false)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Text>Requesting permission ...</Text>

  if (scanData) {
    return (
      <>
        <Text style={styles.text}>Name: {scanData.name}</Text>
        <Text style={styles.text}>Number: {scanData.number}</Text>
        <Button onPress={() => setScanData(undefined)}>Scan Again</Button>
      </>
    )
  }

  if (permission) {
    return (
      <BarCodeScanner
        style={[styles.container]}
        onBarCodeScanned={({ type, data }) => {
          try {
            console.log(type)
            console.log(data)
            // eslint-disable-next-line no-underscore-dangle
            const _data = JSON.parse(data)
            setScanData(_data)
          } catch (error) {
            console.error('Unable to parse string: ', error)
          }
        }}
      >
        <Text style={styles.text}>Scan the QR code.</Text>
      </BarCodeScanner>
    )
  }
  return <Text style={styles.textError}>Permission rejected.</Text>
}

export default ScanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 15,
    backgroundColor: 'white',
  },
  textError: {
    color: 'red',
  },
})
