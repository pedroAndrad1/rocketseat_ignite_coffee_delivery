import { InputHTMLAttributes } from 'react'
import { StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startColumn?: number
  endColumn?: number
  startRow?: number
  endRow?: number
}

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />
}
