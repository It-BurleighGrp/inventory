import { Image, Box, ScrollView } from 'native-base'
import Logo from './assets/Flockdlogo.png'
import { useState } from 'react'
import { ButtonGeneral, InputGeneral, Title } from '@/Components'
import { inventory } from './utils/FormularioInventory'
import { secoes } from '../src/utils/CadastroEntradaTexto'

export default function InventoryForm({ navigation }) {
  const [numSecao, setNumSecao] = useState(0)

  function avancarSecao() {
    if (numSecao < inventory.length - 1) {
      setNumSecao(numSecao + 1)
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Flockd" />
      <Title>{inventory[numSecao].titulo}</Title>
      <Box>
        {inventory[numSecao]?.entradaTexto?.map((entrada) => {
          return (
            <InputGeneral
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            />
          )
        })}
      </Box>

      {numSecao > 0 && (
        <ButtonGeneral onPress={() => voltarSecao()} bgColor="gray.400">
          Voltar
        </ButtonGeneral>
      )}
      {numSecao !== 2 && (
        <ButtonGeneral onPress={() => avancarSecao()} mt={4} mb={20}>
          Avançar
        </ButtonGeneral>
      )}
      {numSecao === secoes.length - 1 && (
        <ButtonGeneral
          onPress={() => {
            setNumSecao(0)
            navigation.navigate('modules', { screen: 'Principal' })
          }}
          bgColor="gray.400"
        >
          Finish
        </ButtonGeneral>
      )}
    </ScrollView>
  )
  // }
}
