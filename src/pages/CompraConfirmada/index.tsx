import { CompraContent, CompraInfos, ConfirmacaoContainer, Info, LinerGradientRadiusBorder } from './styles';
import moto from '../../assets/homem-na-motocicleta.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { theme } from '../../styles/theme';
import { useCarrinhoContext } from '../../contexts/CarrinhoContext';
import { useEffect, useState } from 'react';

const CompraConfirmada = () => {
    // O Return do useEffect e chamado no OnMount. Entao e preciso contar os renders
    const [renderCounter, setRenderCounter] = useState(0);
    const {endereco, formaPagamento, resetCompra, limparCarrinho } = useCarrinhoContext();

    useEffect(() =>{
        limparCarrinho();
        return () => renderCounter == 0 ? setRenderCounter(1) : resetCompra();
    },[renderCounter])

    return (
        <ConfirmacaoContainer>
            <CompraContent>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <LinerGradientRadiusBorder>
                    <CompraInfos>
                        <Info iconContainerColor={theme.purple}>
                            <span>
                                <MapPin size={16} weight="fill" color="#FFFFFF"></MapPin>
                            </span>
                            <div>
                                <p>Entrega em <b>{endereco.rua}, {endereco.numero}</b></p>
                                <p>Rio de Janeiro - Rio de Janeiro, RJ</p>
                            </div>
                        </Info>
                        <Info iconContainerColor={theme.yellow}>
                            <span>
                                <Timer size={16} weight="fill" color="#FFFFFF" />
                            </span>
                            <div>
                                <p>Previsão de entrega</p>
                                <p><b>20 min - 30 min</b></p>
                            </div>
                        </Info>
                        <Info iconContainerColor={theme["yellow-dark"]}>
                            <span>
                                <CurrencyDollar size={16} weight="fill" color="#FFFFFF" />
                            </span>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p><b>{formaPagamento}</b></p>
                            </div>
                        </Info>
                    </CompraInfos>
                </LinerGradientRadiusBorder>
            </CompraContent>
            <img src={moto} alt="Homem em um motocicleta" />
        </ConfirmacaoContainer>
    )
}
export default CompraConfirmada;