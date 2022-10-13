import React from 'react'
import { PageFallBackUi, withPageSuspense } from '../../utils/suspense/lazyPage'

const LazyHomePage = withPageSuspense(
  React.lazy(() => import('../HomeScreen/Home.screen')),
  PageFallBackUi
)

export { LazyHomePage }
