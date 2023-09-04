import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import { CarrinhoContextProvider } from './contexts/CarrinhoContext/CarrinhoContext'
import Carrinho from './pages/Carrinho'
import Home from './pages/Home'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { ToastContainer } from 'react-toastify'
import { GuardedRoute } from './guards/GuardedRoute'
import { Admin } from './pages/Admin'
import { useKeycloak } from '@react-keycloak/web'
import { AdicionarAlterarProduto } from './pages/Admin/AdicionarAlterarProduto'
import { useCarrinhoContext } from './contexts/CarrinhoContext'
import CompraConfirmada from './pages/CompraConfirmada'

function App() {
  const { keycloak } = useKeycloak()
  const { pagamentoConfirmado } = useCarrinhoContext()

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CarrinhoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route
                path="/compra-confirmada/:id_compra"
                element={<GuardedRoute auth={pagamentoConfirmado} />}
              >
                <Route
                  path=""
                  element={<CompraConfirmada></CompraConfirmada>}
                ></Route>
              </Route>
              <Route
                path="admin"
                element={
                  <GuardedRoute
                    auth={keycloak.hasRealmRole('CoffeeDeliveryAdmin')}
                  />
                }
              >
                <Route path="" element={<Admin />} />
                <Route
                  path="adicionar-produto"
                  element={<AdicionarAlterarProduto />}
                />
                <Route
                  path="alterar-produto/:produtoId"
                  element={<AdicionarAlterarProduto />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CarrinhoContextProvider>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
