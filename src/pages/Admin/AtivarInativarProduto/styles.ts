import styled from 'styled-components'

export const AtivarInativarList = styled.ul`
  display: grid;
  gap: 2rem;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 75%;
  margin: 0 auto;
`

export const AtivarInativarListItem = styled.li`
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    color: ${(props) => props.theme['base-text']};

    li {
      text-align: center;
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
export const AtivarInativarUpdateButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 1rem;
`
