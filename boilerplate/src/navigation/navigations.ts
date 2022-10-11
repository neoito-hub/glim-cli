import {NavigationContainerRef} from '@react-navigation/native';

export let navigator: NavigationContainerRef;

export const setTopLevelNavigator = (ref: NavigationContainerRef) => {
  navigator = ref;
};
