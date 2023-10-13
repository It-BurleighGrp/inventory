import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { TEMAS } from './src/estilos/temas'
import {SafeAreaView} from 'react-native'

import Routes from './src/ROUTES'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
        <Routes />
    </NativeBaseProvider>
  )
}
