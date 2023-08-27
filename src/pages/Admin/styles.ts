import styled from 'styled-components'

export const AdminMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(props) => props.theme['base-text']};

    a {
      padding: 1rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme['base-card']};

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
