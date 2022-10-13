import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LazyHomePage } from '../screens/LazyScreen/LazyScreen'
import { setTopLevelNavigator } from './navigationsUtils'

const RootStack = createStackNavigator()

const RootNavigation = () => {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <RootStack.Navigator>
        <RootStack.Screen name="HomePage" component={LazyHomePage} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export { RootNavigation }
