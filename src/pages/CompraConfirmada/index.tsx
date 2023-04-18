import { CompraContent, CompraInfos, ConfirmacaoContainer, Info, LinerGradientRadiusBorder } from './styles';
import moto from '../../assets/homem-na-motocicleta.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { theme } from '../../styles/theme';
import { useCarrinhoContext } from '../../contexts/CarrinhoContext';
import { useEffect } from 'react';

const CompraConfirmada = () => {

    const {endereco, formaPagamento, resetCompra} = useCarrinhoContext();

    useEffect(() =>{
        resetCompra();
    },[])

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