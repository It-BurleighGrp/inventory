import React from 'react'
import { Box, Checkbox } from 'native-base'
import Logo from '@/assets/Flockdlogo.png'
import { useState } from 'react'
import {
  Title,
  ButtonGeneral,
  InputGeneral,
  MasterContainer,
} from '@/Components'
import { secoes } from '@/utils/SignUpForm'
import { Controller, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export function SignUpTemplate() {
  const { control } = useForm({})
  const [numSecao, setNumSecao] = useState(0)
  const navigation = useNavigation()
  const [image, setImage] = useState(null)

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    })

    console.log(result)
    const base64Image = result.assets[0].base64
    console.log('ESTE E A URI DA IMAGEM', base64Image)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <MasterContainer>
      <Styles.Wrapper>
        <Image source={Logo} alt="Logo Flockd" />
        <Title>{secoes[numSecao].titulo}</Title>
        <Styles.BoxSignUp>
          {secoes[numSecao]?.entradaTexto?.map((entrada) => {
            return (
              // eslint-disable-next-line react/jsx-key
              entrada.type === 'image' ? (
                <Controller
                  control={control}
                  // eslint-disable-next-line no-empty-pattern
                  render={({}) => {
                    return (
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ButtonGeneral
                          title="Pick an image from camera roll"
                          onPress={pickImage}
                          backgroundColor="#ED5C2F"
                          width=""
                        >
                          Upload your photo
                        </ButtonGeneral>
                        {image && (
                          <Image
                            source={{ uri: image }}
                            style={{ width: 100, height: 100 }}
                          />
                        )}
                      </View>
                    )
                  }}
                  name={entrada.label}
                />
              ) : (
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
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
            )
          })}
        </Styles.BoxSignUp>
        <Box>
          {secoes[numSecao]?.checkbox?.map((checkbox) => {
            return (
              <Checkbox key={checkbox.id} value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
            )
          })}
        </Box>
        <Styles.WrapperSignUpButtons>
          {numSecao > 0 && (
            <ButtonGeneral
              onPress={() => voltarSecao()}
              backgroundColor="#f58b6b"
            >
              Back
            </ButtonGeneral>
          )}
          {numSecao !== 1 && (
            <ButtonGeneral
              onPress={() => avancarSecao()}
              backgroundColor="#f58b6b"
            >
              Next
            </ButtonGeneral>
          )}
          {numSecao === secoes.length - 1 && (
            <ButtonGeneral
              onPress={() =>
                // @ts-ignore
                navigation.navigate('home')
              }
              backgroundColor="#f58b6b"
            >
              Submit
            </ButtonGeneral>
          )}
        </Styles.WrapperSignUpButtons>
      </Styles.Wrapper>
    </MasterContainer>
  )
}
