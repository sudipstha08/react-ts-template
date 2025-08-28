import { QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { queryClient } from '@/lib'
import { NotFoundPage } from '@/containers'
import './App.css'
import { Loadable } from '@/components'

export const HomePage = Loadable({
  loader: () =>
    import('./containers/HomePage').then(module => ({
      default: module.HomePage,
    })),
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
