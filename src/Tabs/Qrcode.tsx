// import Logo from '../assets/Flockdlogo.png'
import { Button, StyleSheet, View } from 'react-native'
import { IStackScreenprops } from '@/Library/IStackScreenProps'
import { IQRCodePayload } from '@/Library/IQRCodePayload'
import QRCode from 'react-native-qrcode-svg'
import React from 'react'

// eslint-disable-next-line react/function-component-definition
const QRCodeScreen: React.FunctionComponent<IStackScreenprops> = (props) => {
  const { navigation } = props
  const payload: IQRCodePayload = {
    name: 'Cool Person',
    number: '1-234-567-8900',
  }

  return (
    <View style={styles.container}>
      <QRCode value={JSON.stringify(payload)} />
      <View style={styles.button}>
        <Button
          title="Go to Scanner"
          onPress={() => navigation.navigate('Scan')}
        />
      </View>
    </View>
  )
}

export default QRCodeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
})
