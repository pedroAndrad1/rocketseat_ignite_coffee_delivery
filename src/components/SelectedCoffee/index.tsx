import { Trash } from "phosphor-react";
import { useCarrinhoContext } from "../../contexts/CarrinhoContext";
import { Coffee } from "../../data/coffee-data";
import { theme } from "../../styles/theme";
import Counter from "../Counter";
import { ActionsContainer, CarrinhoItemContainer, CarrinhoItemTitle, CarrinhoItemValue, InfosContainer, RemoverButton, SelectedCoffeeImage } from "./styles";

interface SelectedCoffeeProps {
    coffee: Coffee
    amount: number;
}
const SelectedCoffee = ({ coffee, amount }: SelectedCoffeeProps) => {

    const { adicionar, remover } = useCarrinhoContext();

    const removerItem = () => { 
        remover(coffee);
    }

    const increaseItem = () => {
        adicionar(coffee, amount as number + 1);
    }

    const decreaseItem = () => {
        adicionar(coffee, amount as number - 1);
    }

    return (
        <CarrinhoItemContainer>
            <SelectedCoffeeImage src={coffee.src} alt="Imagem de uma xícara" />
            <InfosContainer>
                <CarrinhoItemTitle>{coffee.title}</CarrinhoItemTitle>
                <ActionsContainer>
                    <CarrinhoItemTitle></CarrinhoItemTitle>
                    <Counter counterValue={amount as number} onIncrease={increaseItem} onDecrease={decreaseItem} />
                    <RemoverButton type="button" onClick={() => removerItem()}>
                        <Trash size={22} color={theme.purple}></Trash>
                        <p>Remover</p>
                    </RemoverButton>
                </ActionsContainer>
            </InfosContainer>
            <CarrinhoItemValue>R${coffee.value.replace('.',',')}</CarrinhoItemValue>
        </CarrinhoItemContainer>
    )

}
export default SelectedCoffee;