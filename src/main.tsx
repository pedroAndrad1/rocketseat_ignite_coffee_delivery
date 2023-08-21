import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReactKeycloakProvider authClient={keycloak}>
    {/* <React.StrictMode> */}
        <App />
    {/* </React.StrictMode> */}
  </ReactKeycloakProvider>
)
