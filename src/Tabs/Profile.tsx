import { Image, ScrollView } from 'native-base'
import Logo from '../assets/Flockdlogo.png'

export default function Profile() {
  return (
    <ScrollView flex={1} p={5} marginBottom="5">
      <Image source={Logo} alt="Logo Flockd" />
    </ScrollView>
  )
}
