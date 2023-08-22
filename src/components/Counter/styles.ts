import styled from 'styled-components'

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;

  span {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  svg:hover {
    filter: brightness(0.5);
  }
`
