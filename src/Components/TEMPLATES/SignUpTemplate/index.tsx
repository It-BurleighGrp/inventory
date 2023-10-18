import React from 'react'
import { Image, Box, Checkbox } from 'native-base'
import Logo from '@/assets/Flockdlogo.png'
import { useState } from 'react'
import { Title, ButtonGeneral, InputGeneral, MasterContainer } from '@/Components'
import { secoes } from '@/utils/CadastroEntradaTexto'
import {Controller, useForm} from 'react-hook-form'
import * as Styles from './styles'
import {useNavigation} from '@react-navigation/native'

export function SignUpTemplate() {
  const {control, handleSubmit, formState:{errors}} = useForm({})
  const [numSecao, setNumSecao] = useState(0)
  const navigation = useNavigation()

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
    <MasterContainer>
      <Styles.Wrapper>
        <Image source={Logo} alt="Logo Flockd" />
        <Title>{secoes[numSecao].titulo}</Title>
        <Box style={{backgroundColor: 'yellow'}}>
          {secoes[numSecao]?.entradaTexto?.map((entrada) => {
            return (
              <Controller
              control={control}
              render={({field:{ onChange, value}})=>{
                return(
                  <InputGeneral
                  value={value}
                  label={entrada.label}
                  placeholder={entrada.placeholder}
                  key={entrada.id}
                  type={entrada.type ? entrada.type : 'text'}
                  onChangeText={onChange}
                  />
                  )
                }}
                name={entrada.label}
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
            //@ts-ignore
            navigation.navigate('modules', { screen: 'Principal' })
          }
          color="#f58b6b"
          >
            Go to Inventory
          </ButtonGeneral>
        )}
      </Styles.Wrapper>
    </MasterContainer>
  )
}
