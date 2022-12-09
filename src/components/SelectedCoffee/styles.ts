import styled from "styled-components";

export const CarrinhoItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  border-bottom: 1px solid ${props => props.theme["base-button"]};
  padding-bottom: 1.5rem; ;
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 130%;
`;

export const CarrinhoItemTitle = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 400;
  white-space: nowrap;
  font-size: 1rem;
`;

export const CarrinhoItemValue = styled.span`
  color: ${(props) => props.theme["base-text"]};
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RemoverButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const SelectedCoffeeImage = styled.img`
  height: 64px;
  width: 64px;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:0.5rem ;
`;
