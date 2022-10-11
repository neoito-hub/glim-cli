import React, { Suspense } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { t } from 'react-native-tailwindcss'

//higher order component that generates  the supsensed version of the component that we are passing

export const withPageSuspense = (
  /**
   * Children components.'
   * component needs to be the page or component that we need to be lazy loaded
   * pageFallBackUi can be anything that can be shown while loading or failed to load cases
   *
   */
  Component: React.LazyExoticComponent<(props: any) => JSX.Element>,
  PageFallBackUi: () => JSX.Element
) => {
  return (props: any) => {
    return (
      <Suspense fallback={<PageFallBackUi />}>
        <Component {...props} />
      </Suspense>
    )
  }
}

// fall abck component to load if the main compoent fails to load

export const PageFallBackUi = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[t.flex1, t.justifyCenter, t.alignCenter]}
    >
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
}
