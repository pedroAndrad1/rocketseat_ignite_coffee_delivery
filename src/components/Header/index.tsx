import { NavLink } from 'react-router-dom'
import {
  CarrinhoAmount,
  CarrinhoContainer,
  HeaderContainer,
  LoginButton,
} from './styles'
import logo from '../../assets/logo.svg'
import { User, ShoppingCart, Wrench } from 'phosphor-react'
import { useCarrinhoContext } from '../../contexts/CarrinhoContext'
import { useKeycloak } from '@react-keycloak/web'
import { useCallback, useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'

interface Usuario {
  email: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  username: string | undefined
}

const Header = () => {
  const { carrinho } = useCarrinhoContext()
  const { keycloak, initialized } = useKeycloak()
  const [usuario, setUsuario] = useState<Usuario>()
  const [loginTooltipContent, setLoginTooltipContent] = useState(
    'Clique aqui parar fazer login',
  )

  const loginLogout = async () =>
    keycloak.authenticated ? keycloak.logout() : keycloak.login()

  const loadUsuarioInfo = useCallback(() => {
    keycloak
      .loadUserProfile()
      .then(({ email, firstName, lastName, username }) => {
        setUsuario({
          email,
          firstName,
          lastName,
          username,
        })
        setLoginTooltipContent('Clique aqui para fazer logout')
      })
  }, [keycloak])

  useEffect(() => {
    if (initialized && keycloak.authenticated && !usuario) {
      loadUsuarioInfo()
    }
  }, [usuario, loadUsuarioInfo, initialized, keycloak.authenticated])

  return (
    <HeaderContainer>
      <Tooltip id="login" />
      <NavLink to="/">
        <img src={logo} alt="Café Coffee Delivery"></img>
      </NavLink>
      <nav>
        <LoginButton
          onClick={loginLogout}
          data-tooltip-id="login"
          data-tooltip-content={loginTooltipContent}
        >
          <User size={22} weight="fill" color="#8047F8"></User>
          {!initialized
            ? '...'
            : !keycloak.authenticated
            ? 'Login'
            : `Bem vindo, ${usuario?.firstName}`}
        </LoginButton>
        {keycloak.hasRealmRole('CoffeeDeliveryAdmin') && (
          <NavLink to={'/admin'}>
            <LoginButton>
              <Wrench size={22} weight="fill" color="#8047F8"></Wrench>
              Ferramentas de admin
            </LoginButton>
          </NavLink>
        )}
        <NavLink to="/carrinho">
          <CarrinhoContainer>
            <ShoppingCart size={22} weight="fill" color="#DBAC2C" />
            {carrinho.length > 0 && (
              <CarrinhoAmount>{carrinho.length}</CarrinhoAmount>
            )}
          </CarrinhoContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
export default Header
