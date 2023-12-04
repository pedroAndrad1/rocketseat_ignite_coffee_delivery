import styled from 'styled-components'

export const PedidosList = styled.ul`
  display: grid;
  gap: 2rem;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 75%;
  margin: 0 auto;
`
export const PedidoListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 1rem;

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: ${(props) => props.theme['base-text']};

    li {
      text-align: center;
    }
  }

  p {
    text-align: center;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    ul {
      grid-template-columns: 1fr;
    }
  }
`
