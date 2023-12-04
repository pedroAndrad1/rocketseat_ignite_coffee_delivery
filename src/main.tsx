import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import keycloak from './keycloak'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { CarrinhoContextProvider } from './contexts/CarrinhoContext/CarrinhoContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReactKeycloakProvider authClient={keycloak}>
    <CarrinhoContextProvider>
      <App />
    </CarrinhoContextProvider>
    {/* <React.StrictMode> */}
    {/* </React.StrictMode> */}
  </ReactKeycloakProvider>,
)
