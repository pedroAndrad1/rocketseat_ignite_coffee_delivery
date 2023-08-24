import Container from '../../components/Container'
import { AdminMain } from './styles'

export const Admin = () => {
  return (
    <Container>
      <AdminMain>
        <h1>Ferramentas de administrador</h1>
        <nav>
          <a>Adicionar produto</a>
          <a>Alterar produto</a>
          <a>Inativar produto</a>
        </nav>
      </AdminMain>
    </Container>
  )
}
