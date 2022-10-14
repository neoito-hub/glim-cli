import {
  NavigationContainerRef,
  useNavigationState
} from '@react-navigation/native'

export let navigator: NavigationContainerRef

export const setTopLevelNavigator = (ref: NavigationContainerRef) => {
  navigator = ref
}

export function usePreviousRouteName() {
  return useNavigationState(state =>
    state.routes[state.index - 1]?.name
      ? state.routes[state.index - 1].name
      : 'None'
  )
}
