import { NavLink } from 'react-router-dom'
import Container from '../../components/Container'
import { AdminMain } from './styles'

export const Admin = () => {
  return (
    <Container>
      <AdminMain>
        <h1>Ferramentas de administrador</h1>
        <nav>
          <NavLink to="adicionar-produto">Adicionar produto</NavLink>
          <NavLink to="alterar-produto">Alterar produto</NavLink>
          <NavLink to="alterar-inventario">Alterar inventário</NavLink>
          <NavLink to="invativar-produto">Inativar produto</NavLink>
        </nav>
      </AdminMain>
    </Container>
  )
}
