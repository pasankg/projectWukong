import { FC, ReactNode } from 'react'

interface StackProps {
    children?: ReactNode
}

const Stack:FC<StackProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Stack;
