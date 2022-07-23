import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import Providers from './Providers'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <ColorModeScript />
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
