import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LazyListScreen } from '../screens/LazyPages/LazyPages'
import { LazyHomePage } from '../screens/LazyScreen/LazyScreen'
import { setTopLevelNavigator } from './navigationsUtils'

const RootStack = createStackNavigator()

export type RootStackParamList = {
  ListPage: {}
  HomePage: {}
}

const RootNavigation = () => {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <RootStack.Navigator>
        <RootStack.Screen name="HomePage" component={LazyHomePage} />
        <RootStack.Screen name="ListPage" component={LazyListScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export { RootNavigation }
