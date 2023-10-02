import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  BuyButton,
  Card,
  CardActions,
  ProdutoDescription,
  ProdutoImage,
  ProdutoTitle,
  ProdutoType,
  ProdutoTypes,
  ProdutoValue,
} from './styles'
import { theme } from '../../styles/theme'
import Counter from '../Counter'
import { useCarrinhoContext } from '../../contexts/CarrinhoContext'
import { Produto } from '../../interfaces'
import { usePreco } from '../../custom-hooks/usePreco'

const ProdutoCard = ({
  id,
  nome,
  descricao,
  imageUrl,
  preco,
  tipo,
}: Produto) => {
  const { adicionar } = useCarrinhoContext()
  const { formatPreco } = usePreco()
  const [counter, setCounter] = useState(1)

  const decreaseCounter = () => {
    setCounter((state) => state - 1)
  }

  const increaseCounter = () => {
    setCounter((state) => state + 1)
  }

  const addToCarrinho = () => {
    const produto: Produto = {
      id,
      nome,
      descricao,
      imageUrl,
      preco,
      tipo,
    }
    adicionar(produto, counter)
  }

  return (
    <Card>
      <ProdutoImage src={imageUrl} alt="Foto do produto"></ProdutoImage>
      <ProdutoTypes>
        {tipo.map((tipo, i) => (
          <ProdutoType key={`type_${i}`}>{tipo}</ProdutoType>
        ))}
      </ProdutoTypes>
      <ProdutoTitle>{nome}</ProdutoTitle>
      <ProdutoDescription>{descricao}</ProdutoDescription>
      <CardActions>
        <ProdutoValue>{formatPreco(preco)}</ProdutoValue>
        <Counter
          counterValue={counter}
          onIncrease={increaseCounter}
          onDecrease={decreaseCounter}
        ></Counter>
        <BuyButton onClick={() => addToCarrinho()}>
          <ShoppingCart size={22} weight="fill" color={theme.white} />
        </BuyButton>
      </CardActions>
    </Card>
  )
}
export default ProdutoCard
