import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import { CarrinhoContextProvider } from './contexts/CarrinhoContext/CarrinhoContext'
import Carrinho from './pages/Carrinho'
import Home from './pages/Home'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { ToastContainer } from 'react-toastify'
import { GuardedRoute } from './Guards/GuardedRoute'
import { Admin } from './pages/Admin'
import { useKeycloak } from '@react-keycloak/web'
import { AdicionarAlterarProduto } from './pages/Admin/AdicionarAlterarProduto'
import { useCarrinhoContext } from './contexts/CarrinhoContext'
import CompraConfirmada from './pages/CompraConfirmada'
import { AlterarProduto } from './pages/Admin/AlterarProduto'
import { AlterarInventario } from './pages/Admin/AlterarInventario'
import { AtivarInativarProduto } from './pages/Admin/AtivarInativarProduto'
import { HistoricoPedidos } from './pages/Admin/HistoricoPedidos'

function App() {
  const { keycloak } = useKeycloak()
  const { pagamentoConfirmado } = useCarrinhoContext()

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
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
              <Route path="alterar-produto" element={<AlterarProduto />} />
              <Route
                path="alterar-produto/:produtoId"
                element={<AdicionarAlterarProduto />}
              />
              <Route
                path="alterar-inventario"
                element={<AlterarInventario />}
              />
              <Route
                path="invativar-produto"
                element={<AtivarInativarProduto />}
              />
              <Route path="historico-pedidos" element={<HistoricoPedidos />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
