import React from 'react'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import Button from './components/Button'
import { GlobalStyles } from './styles/globals'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary">Ola mundo</Button>
      <Button variant="secondary">Ola mundo</Button>
      <Button variant="danger">Ola mundo</Button>
      <Button variant="sucess">Ola mundo</Button>

      <GlobalStyles />
    </ThemeProvider>
  )
}
