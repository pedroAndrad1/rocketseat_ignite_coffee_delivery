import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { BuyButton, Card, CardActions, CoffeeDescription, CoffeeImage, CoffeeTitle, CoffeeType, CoffeeTypes, CoffeeValue } from "./styles";
import {theme} from '../../styles/theme';
import Counter from "../Counter";

interface CoffeeCardProps {
    src: string;
    types: string[];
    title: string;
    description: string;
    value: string;
}

const CoffeeCard = ({src, types, title, description, value}: CoffeeCardProps) =>{

    const [counter, setCounter] = useState(1);

    const decreaseCounter = () => {
        setCounter(state => state - 1);
    }

    const increaseCounter = () => {
        setCounter(state => state + 1);
    }

    
    

    return(
        <Card>
            <CoffeeImage src={src} alt='Xicára de café'></CoffeeImage>
            <CoffeeTypes>
                {
                    types.map( (type,i) => <CoffeeType key={`type_${i}`}>{type}</CoffeeType>)
                }
            </CoffeeTypes>
            <CoffeeTitle>{title}</CoffeeTitle>
            <CoffeeDescription>{description}</CoffeeDescription>
            <CardActions>
                <CoffeeValue>R$ <span>{value}</span></CoffeeValue>
                <Counter counterValue={counter} onIncrease={increaseCounter} onDecrease={decreaseCounter}></Counter>
                <BuyButton>
                    <ShoppingCart size={22} weight="fill" color={theme.white} />
                </BuyButton>
            </CardActions>
        </Card>
    )

}
export default CoffeeCard;