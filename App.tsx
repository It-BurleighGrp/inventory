import { NativeBaseProvider, StatusBar } from 'native-base'

import { TEMAS } from './src/estilos/temas'
import Rotas from './src/Routes'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
      {/* <Menu /> */}
      {/* <InventoryForm /> */}
      {/* <Login /> */}
    </NativeBaseProvider>
  )
}
