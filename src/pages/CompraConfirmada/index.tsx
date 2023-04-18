import { CompraContent, CompraInfos, ConfirmacaoContainer, Info, LinerGradientRadiusBorder } from './styles';
import moto from '../../assets/homem-na-motocicleta.svg';
import { MapPin, ShoppingCart, Timer } from 'phosphor-react';
import { theme } from '../../styles/theme';

const CompraConfirmada = () => {

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
                                <p>Entrega em Rua João Daniel Martinelli, 102</p>
                                <p>Farrapos - Porto Alegre, RS</p>
                            </div>
                        </Info>
                        <Info iconContainerColor={theme.yellow}>
                            <span>
                                <Timer size={16} weight="fill" color="#FFFFFF" />
                            </span>
                            <div>
                                <p>Entrega em Rua João Daniel Martinelli, 102</p>
                                <p>Farrapos - Porto Alegre, RS</p>
                            </div>
                        </Info>
                        <Info iconContainerColor={theme["yellow-dark"]}>
                            <span>
                                <ShoppingCart size={16} weight="fill" color="#FFFFFF" />
                            </span>
                            <div>
                                <p>Entrega em Rua João Daniel Martinelli, 102</p>
                                <p>Farrapos - Porto Alegre, RS</p>
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