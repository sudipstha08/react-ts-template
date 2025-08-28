import { FC } from 'react'
import reactLogo from '../../assets/react.svg'
import { Button } from '@/components'

export const HomePage: FC = () => (
  <main
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <h1>HomePage</h1>
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
)
