import styled from 'styled-components'

export const StyledSubmitButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 160%;
  text-transform: uppercase;
  padding: 0.8rem 0.5rem;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
