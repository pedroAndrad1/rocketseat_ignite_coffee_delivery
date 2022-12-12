import { Minus, Plus } from "phosphor-react";
import { theme } from "../../styles/theme";
import { StyledCounter } from "./styles";

interface CounterProps{
    counterValue: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Counter = ({counterValue, onIncrease, onDecrease}: CounterProps) => {
    return (
        <StyledCounter>
            <button type="button" disabled={counterValue == 1 ? true : false} onClick={onDecrease}>
                <Minus size={14} weight="fill" color={theme.purple}/>
            </button>
            <span>{counterValue}</span>
            <button type="button" onClick={onIncrease}>
                <Plus size={14} weight="fill" color={theme.purple} />
            </button>
        </StyledCounter>
    )
}
export default Counter;