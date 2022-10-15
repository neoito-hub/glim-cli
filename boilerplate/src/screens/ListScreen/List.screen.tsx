import { View, Text } from 'react-native'
import React from 'react'
import { usePreviousRouteName } from '../../navigation/navigationsUtils'
import { t } from 'react-native-tailwindcss'

type Props = {}

const ListScreen = (_props: Props) => {
  const prevRoute = usePreviousRouteName()
  return (
    <View>
      <Text>List.screen</Text>
      <Text style={[t.textBlack]}>Prev route </Text>
    </View>
  )
}

export default ListScreen
