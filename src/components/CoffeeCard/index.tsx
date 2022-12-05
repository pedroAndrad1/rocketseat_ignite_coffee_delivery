import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { BuyButton, Card, CardActions, CoffeeCounter, CoffeeDescription, CoffeeImage, CoffeeTitle, CoffeeType, CoffeeTypes, CoffeeValue } from "./styles";
import {theme} from '../../styles/theme';

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
                <CoffeeCounter>
                    <button disabled={counter == 1 ? true : false} onClick={decreaseCounter}>
                        <Minus size={14} weight="fill" color={theme.purple}/>
                    </button>
                    <span>{counter}</span>
                    <button onClick={increaseCounter}>
                        <Plus size={14} weight="fill" color={theme.purple}/>
                    </button>
                </CoffeeCounter>
                <BuyButton>
                    <ShoppingCart size={22} weight="fill" color={theme.white} />
                </BuyButton>
            </CardActions>
        </Card>
    )

}
export default CoffeeCard;