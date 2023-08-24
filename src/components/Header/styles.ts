import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  font-family: 'Roboto', sans-serif;
  padding: 2rem 10rem;

  > nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  @media (max-width: 800px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4rem;
    > nav {
      flex-direction: column;
    }
  }
`

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 8px;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  padding: 0.5rem;

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const CarrinhoContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
`
export const CarrinhoAmount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 9999px;
  position: absolute;
  width: 20px;
  height: 20px;
  top: -7px;
  right: -7px;
`
