import Container from '../../components/Container'
import {
  IntroContainer,
  HomeWrapper,
  IntroImg,
  Item,
  ItemsContainer,
  SubTitle,
  Title,
  SectionTitle,
  ProdutoList,
  ProductsListContainer,
} from './styles'
import IntroImage from '../../assets/cafe_banner_home.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { theme } from '../../styles/theme'
import ProdutoCard from '../../components/ProdutoCard'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useProdutos } from '../../custom-hooks/useProdutos'
import { Produto } from '../../interfaces'
import { Loading } from '../../components/Loading'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { getProdutos } = useProdutos()
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (location.pathname !== '/') navigate('/')

    const handleProdutos = async () => {
      await getProdutos()
        .then((res) => setProdutos(res.data.produtos.content))
        .finally(() => setLoading(true))
    }

    if (loading) {
      handleProdutos()
    }
  }, [navigate, location, getProdutos, loading])

  return (
    <HomeWrapper>
      <IntroContainer>
        <Container>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <ItemsContainer>
            <Item iconContainerColor={theme['yellow-dark']}>
              <span>
                <ShoppingCart size={16} weight="fill" color="#FFFFFF" />
              </span>
              <p>Compra simples e segura</p>
            </Item>
            <Item iconContainerColor={theme['base-text']}>
              <span>
                <Package size={16} weight="fill" color="#FFFFFF" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item iconContainerColor={theme.yellow}>
              <span>
                <Timer size={16} weight="fill" color="#FFFFFF" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item iconContainerColor={theme.purple}>
              <span>
                <Coffee size={16} weight="fill" color="#FFFFFF" />
              </span>
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsContainer>
        </Container>
        <IntroImg
          src={IntroImage}
          alt="Um copo de café com grãos de café atrás"
        ></IntroImg>
      </IntroContainer>
      <Container>
        <ProductsListContainer>
          {loading ? (
            <Loading />
          ) : (
            <>
              <SectionTitle>Nossos cafés</SectionTitle>
              <ProdutoList>
                {produtos.map((produto, i) => (
                  <ProdutoCard {...produto} key={`produto_${i}`}></ProdutoCard>
                ))}
              </ProdutoList>
            </>
          )}
        </ProductsListContainer>
      </Container>
    </HomeWrapper>
  )
}
export default Home
