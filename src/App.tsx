import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>HomePage</h1>
        <img src={viteLogo} className="logo" alt="Vite logo" height={100} />
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            height={300}
          />
        </a>
        <Button label="Click Me" />
      </main>
    </QueryClientProvider>
  )
}

export default App
