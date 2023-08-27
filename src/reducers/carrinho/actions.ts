import { Coffee } from "../../data/coffee-data";
import { CarrinhoActionsEnum } from "./reducer";

export const adicionarCarrinhoAction = (coffee:Coffee, amount: number, toast = true) => {
    return {
        type: CarrinhoActionsEnum.ADICIONAR,
        payload:{
            coffee,
            amount,
            toast
        }
    }
}

export const removerCarrinhoAction = (coffee:Coffee) => {
    return {
        type: CarrinhoActionsEnum.REMOVER,
        payload:{
            coffee
        }
    }
}

export const limparCarrinhoAction = () =>{
    return {
        type: CarrinhoActionsEnum.LIMPAR,
    }
}