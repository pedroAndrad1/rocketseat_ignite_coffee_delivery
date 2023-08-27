import { TextareaHTMLAttributes } from 'react'
import { StyledTextArea } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  startColumn?: number
  endColumn?: number
  startRow?: number
  endRow?: number
}

export const TextArea = (props: TextAreaProps) => {
  return <StyledTextArea {...props} />
}
