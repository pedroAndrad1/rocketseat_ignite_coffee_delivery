import { useContext } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

export const useCarrinhoContext = () => {
  return useContext(CarrinhoContext)
}
