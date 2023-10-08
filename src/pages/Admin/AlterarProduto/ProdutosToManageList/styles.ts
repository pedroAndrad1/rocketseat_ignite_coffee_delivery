import styled from 'styled-components'

export const ProdutosList = styled.ul`
  display: grid;
  gap: 2rem;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 75%;
  margin: 0 auto;
`

export const ProdutoItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }

  img {
    border-radius: 9999px;
    max-height: 100px;
    max-width: 100px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;

    color: ${(props) => props.theme['base-text']};

    li {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    img {
      margin: 0 auto;
    }
  }
`
