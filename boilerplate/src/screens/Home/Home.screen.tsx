import { View, Text } from 'react-native'
import React from 'react'
import { t } from 'react-native-tailwindcss'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <View style={[t.flex1, t.justifyCenter, t.alignCenter]}>
      <Text style={[t.textBlack]}>Home.Page</Text>
    </View>
  )
}

export default HomePage
