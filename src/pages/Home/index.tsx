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
  CoffeList,
} from './styles'
import IntroImage from '../../assets/cafe_banner_home.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { theme } from '../../styles/theme'
import CoffeeCard from '../../components/CoffeeCard'
import { COFFEE_DATA } from '../../data/coffee-data'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname != '/') navigate('/')
  }, [navigate, location])

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
        <main>
          <SectionTitle>Nossos cafés</SectionTitle>
          <CoffeList>
            {COFFEE_DATA.map((coffee, i) => (
              <CoffeeCard {...coffee} key={`coffee_${i}`}></CoffeeCard>
            ))}
          </CoffeList>
        </main>
      </Container>
    </HomeWrapper>
  )
}
export default Home
