import { CarrinhoItem } from "../../contexts/CarrinhoContext";
import produce from "immer";

export enum CarrinhoActionsEnum{
    ADICIONAR, REMOVER, LIMPAR
}

export interface CarrinhoAction{
    type: CarrinhoActionsEnum,
    payload?: CarrinhoItem
}

export const carrinhoReducer = (state:CarrinhoItem[], action: CarrinhoAction) => {
    const carrinhoItemIndex = 
                    state
                    .findIndex
                    (carrinhoItem => carrinhoItem.coffee.title === action.payload?.coffee.title);

    switch (action.type){
        case CarrinhoActionsEnum.ADICIONAR:{
           return produce(state, draft => {
                if(action.payload){
                    if(carrinhoItemIndex >= 0){
                        draft[carrinhoItemIndex] = action.payload;
                    }
                    else{ 
                        draft.push(action.payload);
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