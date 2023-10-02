import { Produto } from '../../interfaces'
import { CarrinhoActionsEnum } from './reducer'

export const adicionarCarrinhoAction = (
  produto: Produto,
  amount: number,
  options?: { noToast: boolean },
) => {
  return {
    type: CarrinhoActionsEnum.ADICIONAR,
    payload: {
      produto,
      amount,
    },
    options,
  }
}

export const removerCarrinhoAction = (
  produto: Produto,
  options?: { noToast: boolean },
) => {
  return {
    type: CarrinhoActionsEnum.REMOVER,
    payload: {
      produto,
    },
    options,
  }
}

export const limparCarrinhoAction = () => {
  return {
    type: CarrinhoActionsEnum.LIMPAR,
  }
}
