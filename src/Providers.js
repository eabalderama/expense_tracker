import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'

const Providers = ({ children }) => {
  return(
    <ChakraProvider theme={theme}>
        { children }
    </ChakraProvider>
  )
}

export default Providers