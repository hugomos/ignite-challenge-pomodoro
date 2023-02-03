import React from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
  variant?: ButtonVariant
}

const Button: React.FC<IProps> = ({ children, variant = 'primary' }) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}

export default Button
