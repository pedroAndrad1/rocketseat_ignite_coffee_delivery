import { NavLink } from 'react-router-dom'
import { Produto } from '../../../../interfaces'
import { ProdutoItem, ProdutosList } from './styles'
import imageDefault from '../../../../assets/default-image.jpg'
import { usePreco } from '../../../../custom-hooks/usePreco'

interface ProdutosToManageListProps {
  produtos: Produto[]
}

export const ProdutosToManageList = ({
  produtos,
}: ProdutosToManageListProps) => {
  const { formatPreco } = usePreco()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageError = (e: any) => {
    e.target.src = imageDefault
  }

  return (
    <ProdutosList>
      {produtos.map((produto, i) => {
        return (
          <NavLink key={`ProdutoItem__${i}`} to={`${produto.id}`}>
            <ProdutoItem>
              <img
                src={produto.imageUrl || imageDefault}
                alt="Imagem do produto"
                onError={handleImageError}
              />
              <ul>
                <li>
                  <strong>{produto.nome}</strong>
                </li>
                <li>{formatPreco(produto.preco)}</li>
                <ul>
                  {produto.tipo.map((tipo, i) => (
                    <li key={`ProdutoItem__tipo__${i}`}>{tipo}</li>
                  ))}
                </ul>
                {/* <li>{produto.ativo ? 'Ativo' : 'Inativo'}</li> */}
              </ul>
            </ProdutoItem>
          </NavLink>
        )
      })}
    </ProdutosList>
  )
}
