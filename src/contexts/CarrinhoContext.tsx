import { createContext, ReactNode, useContext, useReducer, useState } from "react";
import { Coffee } from "../data/coffee-data";
import { adicionarCarrinhoAction, removerCarrinhoAction, limparCarrinhoAction} from "../reducers/carrinho/actions";
import { carrinhoReducer } from "../reducers/carrinho/reducer";

export interface CarrinhoItem {
    coffee: Coffee,
    amount?: number,
    toast?: boolean
}

export interface Endereco {
    rua: string;
    numero: string;
    complemento?: string;
}

interface CarrinhoContextData {
    carrinho: CarrinhoItem[],
    endereco: Endereco,
    formaPagamento: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
    pagamentoConfirmado: boolean,
    adicionar: (coffee: Coffee, amount: number, toast?: boolean) => void,
    remover: (coffee: Coffee) => void,
    adicionarEndereco: (endereco: Endereco) => void,
    adicionarFormaPagamento:
        (formaPagamento: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro') => void,
    confirmarPagamento: () => void,
    resetCompra: () => void,
    limparCarrinho: () => void
}

interface CarrinhoContextProps {
    children: ReactNode
}


const CarrinhoContext = createContext({} as CarrinhoContextData);

export function CarrinhoContextProvider({ children }: CarrinhoContextProps) {
    const [carrinho, dispatchCarrinho] = useReducer(carrinhoReducer, []);
    const [endereco, setEndereco] = useState<Endereco>({numero:'',rua:''});
    const [formaPagamento, setFormaPagamento] =
        useState<'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'>('Cartão de crédito');
    const [pagamentoConfirmado, setPagamentoConfirmado] = useState(false);

    const adicionar = (coffee: Coffee, amount: number, toast = true) =>
        dispatchCarrinho(adicionarCarrinhoAction(coffee, amount, toast));

    const remover = (coffee: Coffee) =>
        dispatchCarrinho(removerCarrinhoAction(coffee));

    const adicionarEndereco = (endereco: Endereco) =>
        setEndereco(endereco)

    const adicionarFormaPagamento = 
        (formaPagamento: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro') =>
        setFormaPagamento(formaPagamento);
    
    const confirmarPagamento = () => setPagamentoConfirmado(true);

    const limparCarrinho = () =>
        dispatchCarrinho(limparCarrinhoAction());

    const resetCompra = () =>
        setPagamentoConfirmado(false);
    
    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            endereco,
            formaPagamento,
            pagamentoConfirmado,
            adicionar,
            remover,
            adicionarEndereco,
            adicionarFormaPagamento,
            resetCompra,
            confirmarPagamento,
            limparCarrinho
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    return useContext(CarrinhoContext);
}