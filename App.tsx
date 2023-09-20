import Login from './src/Login';
import Menu from './src/Menu';
import { NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from './src/estilos/temas'; 

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Menu />
      {/* <Login /> */}
    </NativeBaseProvider>
  );
}


