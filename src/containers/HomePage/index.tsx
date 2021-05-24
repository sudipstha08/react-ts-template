import React, { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode;
}

const HomePage: FC<IProps> = () => {
  return <div>Homepage</div>
}

export default HomePage
