import styled from 'styled-components'

export const StyledInventarioListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 1rem;

  img {
    border-radius: 9999px;
    max-height: 100px;
    max-width: 100px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
    color: ${(props) => props.theme['base-text']};

    li:first-child {
      font-weight: 700;
      text-align: center;
    }

    form {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    img {
      margin: 0 auto;
    }

    ul {
      grid-template-columns: 1fr;
    }
  }
`
export const InventarioListItemSubmitButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
`
