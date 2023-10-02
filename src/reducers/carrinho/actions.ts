import { Produto } from '../../interfaces'
import { CarrinhoActionsEnum } from './reducer'

export const adicionarCarrinhoAction = (produto: Produto, amount: number) => {
  return {
    type: CarrinhoActionsEnum.ADICIONAR,
    payload: {
      produto,
      amount,
    },
  }
}

export const removerCarrinhoAction = (produto: Produto) => {
  return {
    type: CarrinhoActionsEnum.REMOVER,
    payload: {
      produto,
    },
  }
}

export const limparCarrinhoAction = () => {
  return {
    type: CarrinhoActionsEnum.LIMPAR,
  }
}
