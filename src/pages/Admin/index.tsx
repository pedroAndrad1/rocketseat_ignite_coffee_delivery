import { NavLink, Outlet } from 'react-router-dom'
import Container from '../../components/Container'
import { AdminMain } from './styles'

export const Admin = () => {
  return (
    <Container>
      <AdminMain>
        <h1>Ferramentas de administrador</h1>
        <nav>
          <NavLink to="adicionar-produto">Adicionar produto</NavLink>
          <a>Alterar produto</a>
          <a>Inativar produto</a>
        </nav>
      </AdminMain>
    </Container>
  )
}
