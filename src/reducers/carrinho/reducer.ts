import { CarrinhoItem } from "../../contexts/CarrinhoContext";
import produce from "immer";
import useToast from "../../custom-hooks/useToast";

export enum CarrinhoActionsEnum{
    ADICIONAR, REMOVER, LIMPAR
}

export interface CarrinhoAction{
    type: CarrinhoActionsEnum,
    payload?: CarrinhoItem
}

export const carrinhoReducer = (state:CarrinhoItem[], action: CarrinhoAction) => {
    const {success} = useToast()
    const carrinhoItemIndex = 
                    state
                    .findIndex
                    (carrinhoItem => carrinhoItem.coffee.title === action.payload?.coffee.title);

    switch (action.type){
        case CarrinhoActionsEnum.ADICIONAR:{
           return produce(state, draft => {
                if(action.payload){
                    if(carrinhoItemIndex >= 0){
                        if(draft[carrinhoItemIndex].amount !=  action.payload.amount){
                            success('Carrinho atualizado!')
                        }
                        draft[carrinhoItemIndex] = action.payload;
                    }
                    else{ 
                        draft.push(action.payload);
                        success('Adicionado ao carrinho!')
                    }
                }
            })
        }
        case CarrinhoActionsEnum.REMOVER:{
           return produce(state, draft =>{
                if(carrinhoItemIndex != -1){
                    draft.splice(carrinhoItemIndex, 1)
                }
               
            })
        }
        case CarrinhoActionsEnum.LIMPAR:{
            return produce(state, draft => draft = [] )
        }
        default: return state;
    }
}