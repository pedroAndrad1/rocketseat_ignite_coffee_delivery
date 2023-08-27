import { ButtonHTMLAttributes } from 'react'
import { StyledSubmitButton } from './styles'

export const SubmitButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <StyledSubmitButton type="submit" {...props}>
      {props.children}
    </StyledSubmitButton>
  )
}
