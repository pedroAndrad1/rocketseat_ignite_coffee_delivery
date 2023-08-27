import { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  startColumn?: number
  endColumn?: number
  startRow?: number
  endRow?: number
}

export const StyledTextArea = styled.textarea<TextAreaProps>`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 130%;
  display: inline-block;

  &:focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.yellow};
  }

  &:disabled {
    filter: brightness(0.9);
    cursor: not-allowed;
  }

  grid-column-start: ${(props) => props.startColumn};
  grid-column-end: ${(props) => props.endColumn};
  grid-row-start: ${(props) => props.startRow};
  grid-row-end: ${(props) => props.endRow};

  @media (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 16;
  }
`
