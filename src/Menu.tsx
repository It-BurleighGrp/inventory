import React from 'react'
import { Image, Box, ScrollView, Checkbox } from 'native-base'
import Logo from '../src/assets/Flockdlogo.png'
import { useState } from 'react'
import { Title, ButtonGeneral, InputGeneral } from '@/Components'
import { secoes } from '../src/utils/CadastroEntradaTexto'

export default function Menu({ navigation }) {
  const [numSecao, setNumSecao] = useState(0)

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
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
      <Title>{secoes[numSecao].titulo}</Title>
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => {
          return (
            <InputGeneral
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
              type={entrada.type ? entrada.type : 'text'}
            />
          )
        })}
      </Box>
      <Box>
        {secoes[numSecao]?.checkbox?.map((checkbox) => {
          return (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
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
          onPress={() =>
            navigation.navigate('modules', { screen: 'Principal' })
          }
          bgColor="gray.400"
        >
          Go to Inventory
        </ButtonGeneral>
      )}
    </ScrollView>
  )
  // }
}
