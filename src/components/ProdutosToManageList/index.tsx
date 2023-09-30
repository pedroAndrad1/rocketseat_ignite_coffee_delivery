import { NavLink } from 'react-router-dom'
import { Produto } from '../../interfaces'
import { ProdutoItem, ProdutosList } from './styles'
import imageDefault from '../../assets/default-image.jpg'

interface ProdutosToManageListProps {
  produtos: Produto[]
}

export const ProdutosToManageList = ({
  produtos,
}: ProdutosToManageListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageError = (e: any) => {
    e.target.src = imageDefault
  }

  return (
    <ProdutosList>
      {produtos.map((produto, i) => {
        return (
          <NavLink
            key={`ProdutoItem__${i}`}
            to={`/alterar-produto/${produto.id}`}
          >
            <ProdutoItem>
              <img
                src={produto.imageUrl || imageDefault}
                alt="Imagem do produto"
                onError={handleImageError}
              />
              <ul>
                <li>{produto.nome}</li>
                <li>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(produto.preco)}
                </li>
                <ul>
                  {produto.tipo.map((tipo, i) => (
                    <li key={`ProdutoItem__tipo__${i}`}>{tipo}</li>
                  ))}
                </ul>
                <li>{produto.ativo ? 'Ativo' : 'Inativo'}</li>
              </ul>
            </ProdutoItem>
          </NavLink>
        )
      })}
    </ProdutosList>
  )
}
