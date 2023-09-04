import styled from 'styled-components'

export const AddProdutoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    flex-direction: column;
    display: flex;
  }

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
`
