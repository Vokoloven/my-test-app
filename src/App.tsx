import React from 'react'
import { Home } from 'components/home/Home'
import { GlobalStyle } from 'theme/CreateGlobalStyle '
import { Box } from 'theme/Box'
export const App: React.FC = () => {
    return (
        <Box pt={5} pb={6}>
            <GlobalStyle />
            <Home />
        </Box>
    )
}
