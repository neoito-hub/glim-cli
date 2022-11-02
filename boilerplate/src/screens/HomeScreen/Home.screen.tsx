import { View, Text, Button } from 'react-native'
import React from 'react'
import { t } from 'react-native-tailwindcss'
import { usePreviousRouteName } from '../../navigation/navigationsUtils'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/navigation/rootNavigation'

type Props = {}

const HomePage = (_props: Props) => {
  const prevRoute = usePreviousRouteName()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <View style={[t.flex1, t.justifyCenter, t.alignCenter, t.selfCenter]}>
      <Text style={[t.textBlack]}>Home.Page</Text>
      <Text style={[t.textBlack]}>Prev route : {prevRoute} </Text>
      <Button
        title="Go to List"
        onPress={() => {
          navigation.navigate('ListPage')
        }}
      />
    </View>
  )
}

export default HomePage
