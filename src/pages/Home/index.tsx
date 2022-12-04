import Container from "../../components/Container";
import { HomeContainer, HomeWrapper, IntroImg, Item, ItemsContainer, SubTitle, Title } from "./styles";
import IntroImage from '../../assets/cafe_banner_home.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { theme } from '../../styles/theme';

const Home = () => {
    return (
        <HomeWrapper>
            <Container>
                <HomeContainer>
                    <div>
                        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                        <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                        <ItemsContainer>
                            <Item iconContainerColor={theme["yellow-dark"]}>
                                <span>
                                    <ShoppingCart size={16} weight="fill" color="#FFFFFF" />
                                </span>
                                <p>Compra simples e segura</p>
                            </Item>
                            <Item iconContainerColor={theme["base-text"]}>
                                <span>
                                    <Package size={16} weight="fill" color="#FFFFFF" />
                                </span>
                                <p>Embalagem mantém o café intacto</p>
                            </Item>
                            <Item iconContainerColor={theme.yellow}>
                                <span>
                                    <Timer  size={16} weight="fill" color="#FFFFFF" />
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
                    </div>
                    <IntroImg src={IntroImage} alt='Um copo de café com grãos de café atrás'></IntroImg>
                </HomeContainer>
            </Container>
        </HomeWrapper>
    )
}
export default Home;