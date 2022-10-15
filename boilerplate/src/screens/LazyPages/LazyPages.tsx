import React from 'react'
import { PageFallBackUi, withPageSuspense } from '../../utils/suspense/lazyPage'

const LazyHomePage = withPageSuspense(
  React.lazy(() => import('../Home/Home.screen')),
  PageFallBackUi
)

const LazyListScreen = withPageSuspense(
  React.lazy(() => import('../ListScreen/List.screen')),
  PageFallBackUi
)

export { LazyHomePage, LazyListScreen }
