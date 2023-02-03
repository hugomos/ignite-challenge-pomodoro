import styled from 'styled-components'
// import { shade } from 'polished'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface IButtonContainerProps {
  variant: ButtonVariant
}

// const buttonVariants = {
//   primary: 'purple',
//   secondary: 'orange',
//   danger: 'red',
//   sucess: 'green',
// }

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 5px;

  margin: 8px;

  color: white;

  background-color: ${(props) => props.theme['green-500']};

  &:hover {
  }

  transition: all 0.1s;
`
