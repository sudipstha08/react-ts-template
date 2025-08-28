import { FC } from 'react'

interface IButton {
  label: string
}

export const Button: FC<IButton> = ({ label }) => <button>{label}</button>
