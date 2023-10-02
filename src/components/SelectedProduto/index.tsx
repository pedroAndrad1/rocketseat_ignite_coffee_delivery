import { Trash } from 'phosphor-react'
import { useCarrinhoContext } from '../../contexts/CarrinhoContext'
import { theme } from '../../styles/theme'
import Counter from '../Counter'
import {
  ActionsContainer,
  CarrinhoItemContainer,
  CarrinhoItemTitle,
  CarrinhoItemValue,
  InfosContainer,
  RemoverButton,
  SelectedProdutoImage,
} from './styles'
import { Produto } from '../../interfaces'
import { usePreco } from '../../custom-hooks/usePreco'

interface SelectedProdutoProps {
  produto: Produto
  amount: number
}
const SelectedProduto = ({ produto, amount }: SelectedProdutoProps) => {
  const { adicionar, remover } = useCarrinhoContext()
  const { formatPreco } = usePreco()

  const removerItem = () => {
    remover(produto)
  }

  const increaseItem = () => {
    adicionar(produto, (amount as number) + 1, { noToast: true })
  }

  const decreaseItem = () => {
    adicionar(produto, (amount as number) - 1, { noToast: true })
  }

  return (
    <CarrinhoItemContainer>
      <SelectedProdutoImage src={produto.imageUrl} alt="Imagem de uma xícara" />
      <InfosContainer>
        <CarrinhoItemTitle>{produto.nome}</CarrinhoItemTitle>
        <ActionsContainer>
          <CarrinhoItemTitle></CarrinhoItemTitle>
          <Counter
            counterValue={amount as number}
            onIncrease={increaseItem}
            onDecrease={decreaseItem}
          />
          <RemoverButton type="button" onClick={() => removerItem()}>
            <Trash size={22} color={theme.purple}></Trash>
            <p>Remover</p>
          </RemoverButton>
        </ActionsContainer>
      </InfosContainer>
      <CarrinhoItemValue>{formatPreco(produto.preco)}</CarrinhoItemValue>
    </CarrinhoItemContainer>
  )
}
export default SelectedProduto
