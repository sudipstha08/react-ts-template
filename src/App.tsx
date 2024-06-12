import { QueryClientProvider } from '@tanstack/react-query'
import { Button } from '@/components'
import { queryClient } from '@/lib'
import './App.css'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>HomePage</h1>
      <Button label="Click Me" />
    </QueryClientProvider>
  )
}

export default App
