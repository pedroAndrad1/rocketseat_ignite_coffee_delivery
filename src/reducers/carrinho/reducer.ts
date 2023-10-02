import { CarrinhoItem } from '../../contexts/CarrinhoContext/CarrinhoContext'
import produce from 'immer'
import useToast from '../../custom-hooks/useToast'

export enum CarrinhoActionsEnum {
  ADICIONAR,
  REMOVER,
  LIMPAR,
}

export interface CarrinhoAction {
  type: CarrinhoActionsEnum
  payload?: CarrinhoItem
  options?: { noToast: boolean }
}

export const CarrinhoReducer = (
  state: CarrinhoItem[],
  action: CarrinhoAction,
) => {
  const { success } = useToast()
  const carrinhoItemIndex = state.findIndex(
    (carrinhoItem) =>
      carrinhoItem.produto.nome === action.payload?.produto.nome,
  )

  switch (action.type) {
    case CarrinhoActionsEnum.ADICIONAR: {
      return produce(state, (draft) => {
        if (action.payload) {
          if (carrinhoItemIndex >= 0) {
            if (draft[carrinhoItemIndex].amount !== action.payload.amount) {
              if (!action.options?.noToast) success('Carrinho atualizado!')
            }
            draft[carrinhoItemIndex] = action.payload
          } else {
            draft.push(action.payload)
            if (!action.options?.noToast) success('Adicionado ao carrinho!')
          }
        }
      })
    }
    case CarrinhoActionsEnum.REMOVER: {
      return produce(state, (draft) => {
        if (carrinhoItemIndex !== -1) {
          draft.splice(carrinhoItemIndex, 1)
        }
      })
    }
    case CarrinhoActionsEnum.LIMPAR: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return produce(state, (draft) => (draft = []))
    }
    default:
      return state
  }
}
