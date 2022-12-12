import { createContext, ReactNode, useContext, useReducer } from "react";
import { Coffee } from "../data/coffee-data";
import { adicionarCarrinhoAction, removerCarrinhoAction } from "../reducers/carrinho/actions";
import { carrinhoReducer } from "../reducers/carrinho/reducer";

export interface CarrinhoItem{
    coffee: Coffee,
    amount?: number
}

interface CarrinhoContextData{
    carrinho: CarrinhoItem[],
    adicionar: (coffee:Coffee, amount: number) => void,
    remover: (coffee:Coffee) => void,
}

interface CarrinhoContextProps{
    children: ReactNode
}


export const CarrinhoContext = createContext({} as CarrinhoContextData);

export function CarrinhoContextProvider({children}: CarrinhoContextProps){
    const [carrinho, dispatchCarrinho] = useReducer( carrinhoReducer, []);

    const adicionar = (coffee:Coffee, amount: number) =>{
        dispatchCarrinho(adicionarCarrinhoAction(coffee, amount));
        console.log(carrinho);
        
        
    }
    const remover = (coffee:Coffee) =>{
        dispatchCarrinho(removerCarrinhoAction(coffee))
    }

    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            adicionar,
            remover
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () =>{
    return useContext(CarrinhoContext);
}