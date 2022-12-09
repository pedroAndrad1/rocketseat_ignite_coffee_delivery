import { Coffee } from "../../data/coffee-data";
import { CarrinhoActionsEnum } from "./reducer";

export const adicionarCarrinhoAction = (coffee:Coffee, amount: number) => {
    return {
        type: CarrinhoActionsEnum.ADICIONAR,
        payload:{
            coffee,
            amount
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