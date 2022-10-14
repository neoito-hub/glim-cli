/* eslint-disable react-native/no-raw-text, no-console */
// https://github.com/Intellicode/eslint-plugin-react-native/issues/271

// TODO: Fix Storybook v6.0.1-alpha.7 crash and upgrade to v6.0.1-beta.6
import { useNavigationState } from '@react-navigation/native'
import _StorybookUIRoot from '../.storybook/Storybook'
import { RootNavigation } from './navigation/rootNavigation'

if (__DEV__) {
  import('../ReactotronConfig')
    .then(() => {
      console.log('Reactotron Configured')
    })
    .catch(() => console.error)
}

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export const App = () => {
  return <RootNavigation />
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
export default App // Or StorybookUIRoot

// export default Reactotron.storybookSwitcher(storybook)(App)
// https://github.com/infinitered/reactotron/issues/1160
