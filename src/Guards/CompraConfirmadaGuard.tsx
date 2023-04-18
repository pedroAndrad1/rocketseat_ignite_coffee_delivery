import { useCarrinhoContext } from '../contexts/CarrinhoContext';
import CompraConfirmada from '../pages/CompraConfirmada';
import Home from '../pages/Home';

export const CompraConfirmadaGuard = () =>{
    const {pagamentoConfirmado} = useCarrinhoContext();
    return (
       <>{
        !pagamentoConfirmado ? <Home /> : <CompraConfirmada />
       }</>
    )

}