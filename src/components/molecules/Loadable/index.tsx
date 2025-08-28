import React, { Suspense, ComponentType, lazy } from 'react'
import { Loader } from '@/components'

type LoadableOptions = {
  loader: () => Promise<{ default: ComponentType }>
  fallback?: React.ReactNode
}

interface Props {
  [key: string]: unknown
}

export function Loadable({ loader, fallback = <Loader /> }: LoadableOptions) {
  const LazyComponent = lazy(loader)

  const WrappedComponent = (props: Props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  return WrappedComponent
}
