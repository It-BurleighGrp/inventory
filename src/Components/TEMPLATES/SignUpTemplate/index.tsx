import React from 'react'
import { Image, Box, Checkbox } from 'native-base'
import Logo from '../src/assets/Flockdlogo.png'
import { useState } from 'react'
import { Title, ButtonGeneral, InputGeneral } from '@/Components'
import { secoes } from '@/utils/CadastroEntradaTexto'
import * as Styles from './styles'

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
    <Styles.Wrapper>
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
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.')
              }}
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
        <ButtonGeneral onPress={() => voltarSecao()} color="#f58b6b">
          Back
        </ButtonGeneral>
      )}
      {numSecao !== 2 && (
        <ButtonGeneral onPress={() => avancarSecao()} color="#f58b6b">
          Next
        </ButtonGeneral>
      )}
      {numSecao === secoes.length - 1 && (
        <ButtonGeneral
          onPress={() =>
            navigation.navigate('modules', { screen: 'Principal' })
          }
          color="#f58b6b"
        >
          Go to Inventory
        </ButtonGeneral>
      )}
    </Styles.Wrapper>
  )
  // }
}
