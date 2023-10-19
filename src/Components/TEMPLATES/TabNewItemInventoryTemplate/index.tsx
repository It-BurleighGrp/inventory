import { Image, ScrollView } from 'native-base'
import React from 'react'
import Logo from '../../../assets/Flockdlogo.png'
import { useState } from 'react'
import {
  ButtonGeneral,
  InputGeneral,
  Title,
  MasterContainer,
} from '@/Components'
import { inventory } from '../../../utils/FormularioInventory'
import { secoes } from '../../../utils/SignUpForm'
import { useNavigation } from '@react-navigation/native'
import * as Styles from './styles'
import { Controller, useForm } from 'react-hook-form'
// import { IStackScreenprops } from '@/Library/IStackScreenProps'
// import { IQRCodePayload } from '@/Library/IQRCodePayload'

export function InventoryForm() {
  const [numSecao, setNumSecao] = useState(0)
  const navigation = useNavigation()
  const { control } = useForm({})

  //   // eslint-disable-next-line react/function-component-definition, react/no-unstable-nested-components
  //   const QRCodeScreen: React.FunctionComponent<IStackScreenprops> = (props) => {
  //     const { navigation } = props
  //     const payload: IQRCodePayload = {
  //       name: 'Cool Person',
  //       number: '1-234-567-8900',
  //     }

  //     return (
  //       <View>
  //         <QRCode value={JSON.stringify(payload)} />
  //         <View>
  //           <ButtonGeneral
  //             backgroundColor="blue.800"
  //             onPress={() => navigation.navigate('Scan')}
  //           >
  //             Go to Scanner
  //           </ButtonGeneral>
  //         </View>
  //       </View>
  //     )
  //   }

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
    <MasterContainer>
      <ScrollView flex={1} p={5}>
        <Image source={Logo} alt="Logo Flockd" />
        <Title>{inventory[numSecao].titulo}</Title>
        <Styles.BoxNewItem>
          {inventory[numSecao]?.entradaTexto?.map((entrada) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputGeneral
                      value={value}
                      label={entrada.label}
                      placeholder={entrada.placeholder}
                      key={entrada.id}
                      onChangeText={onChange}
                    />
                  )
                }}
                name={entrada.label}
              />
            )
          })}
        </Styles.BoxNewItem>
        <Styles.WrapperNewitemButtons>
          {numSecao > 0 && (
            <ButtonGeneral
              onPress={() => voltarSecao()}
              backgroundColor="#f58b6b"
            >
              Back
            </ButtonGeneral>
          )}
          {numSecao !== 2 && (
            <ButtonGeneral
              onPress={() => avancarSecao()}
              backgroundColor="#f58b6b"
            >
              Next
            </ButtonGeneral>
          )}
          {numSecao === secoes.length && (
            <ButtonGeneral
              onPress={() => {
                setNumSecao(0)
                // @ts-ignore
                navigation.navigate('modules', { screen: 'Principal' })
              }}
              backgroundColor="#f58b6b"
            >
              Finish
            </ButtonGeneral>
          )}
        </Styles.WrapperNewitemButtons>
      </ScrollView>
    </MasterContainer>
  )
}
