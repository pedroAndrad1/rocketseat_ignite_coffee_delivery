import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Carrinho from './pages/Carrinho';
import CompraConfirmada from './pages/CompraConfirmada';
import Home from './pages/Home';
import { theme } from './styles/theme';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/carrinho' element={<Carrinho />}></Route>
          <Route path='/compra-confirmada/:id_compra' element={<CompraConfirmada />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
