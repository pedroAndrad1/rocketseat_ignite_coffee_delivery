import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    padding: 0 1rem 1rem 1rem;
`

export const CoffeeImage = styled.img`
    margin-top: -1rem;
    margin-bottom: 1rem;
`

export const CoffeeTypes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem ;
    margin-bottom: 1rem;
`

export const CoffeeType = styled.span`
    background-color: ${props => props.theme["yellow-light"]};
    border-radius: 100px;
    color: ${props => props.theme["yellow-dark"]};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    padding: 0.40rem;
`

export const CoffeeTitle = styled.h3`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 130%;
    margin-bottom: 1rem;
    text-align: center;
`

export const CoffeeDescription = styled.p`
    color: ${props => props.theme["base-label"]} ;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 130%;
    text-align: center;
    margin-bottom: 2rem;
`

export const CardActions = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 0.25rem ;
    width: 100%;
`

export const CoffeeValue = styled.span`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${props => props.theme["base-text"]};

    span{
        font-family: 'Baloo 2';
        font-size: 1.5rem;
        font-weight: 800 ;
    }
`

export const CoffeeCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;
    padding: 0.5rem ;

    span{
        color: ${props => props.theme["base-title"]};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }
`

export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["purple-dark"]};
    border-radius: 6px;
`
