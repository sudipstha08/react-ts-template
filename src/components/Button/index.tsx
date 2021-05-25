import React, { FC } from 'react'

interface IProps {
  label: string
}

const Button: FC<IProps> = ({ label }) => {
  return <button>{label}</button>
}

export { Button }
