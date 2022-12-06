import { NavLink } from "react-router-dom";
import { CarrinhoAmount, CarrinhoContainer, HeaderContainer, Location } from "./styles";
import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCarrinhoContext } from "../../contexts/CarrinhoContext";

const Header = () => {

    const {carrinho} = useCarrinhoContext()

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Café Coffee Delivery"></img>
            </NavLink>
            <div>
                <Location>
                    <MapPin size={22} weight="fill" color="#8047F8"></MapPin>
                    <p>Rio de Janeiro, RJ</p>
                </Location>
                <NavLink to="/carrinho">
                    <CarrinhoContainer>
                        <ShoppingCart size={22} weight="fill" color="#DBAC2C" />
                       {
                        carrinho.length > 0 &&  <CarrinhoAmount>{carrinho.length}</CarrinhoAmount>
                       }
                    </CarrinhoContainer>
                </NavLink>
            </div>
        </HeaderContainer>
    )
}
export default Header;