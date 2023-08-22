import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import { CarrinhoContextProvider } from './contexts/CarrinhoContext'
import Carrinho from './pages/Carrinho'
import Home from './pages/Home'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { ToastContainer } from 'react-toastify'
import { CompraConfirmadaGuard } from './Guards/CompraConfirmadaGuard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CarrinhoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/carrinho" element={<Carrinho />}></Route>
              <Route
                path="/compra-confirmada/:id_compra"
                element={<CompraConfirmadaGuard />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CarrinhoContextProvider>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
