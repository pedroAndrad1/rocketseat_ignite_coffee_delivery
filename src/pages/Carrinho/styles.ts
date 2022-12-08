import styled, { css } from "styled-components";

export const CarrinhoForm = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;

  @media(max-width: 1024px){
    grid-template-columns: 1fr;
  }
`;
export const SubTitle = styled.h2`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2";
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
`;

export const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const EnderecoBox = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;
export const DescriptionBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1.5fr;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const BoxTitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;
export const BoxDescription = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;
export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SelectedCoffees = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const EnderecoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  gap: 0.5rem;
  margin-top: 3rem;
`;

interface InputProps {
  startColumn?: number;
  endColumn?: number;
  startRow?: number;
  endRow?: number;
}
export const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};
  padding: 0.75rem;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 130%;
  display: inline-block;

  &:focus {
    outline: none !important;
    border: 1px solid ${(props) => props.theme.yellow};
  }

  &:disabled {
    filter: brightness(0.9);
    cursor: not-allowed;
  }

  grid-column-start: ${(props) => props.startColumn};
  grid-column-end: ${(props) => props.endColumn};
  grid-row-start: ${(props) => props.startRow};
  grid-row-end: ${(props) => props.endRow};

  @media (max-width: 600px){
    grid-column-start:1;
    grid-column-end: 16;
  }
`;

interface ErrorMessageProps {
  startColumn?: number;
  endColumn?: number;
  startRow?: number;
  endRow?: number;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  font-family: 'Roboto', sans-serif;
  color: red;
  font-size: 0.75rem ;

  grid-column-start: ${(props) => props.startColumn};
  grid-column-end: ${(props) => props.endColumn};
  grid-row-start: ${(props) => props.startRow};
  grid-row-end: ${(props) => props.endRow};

  
  @media (max-width: 600px){
    grid-column-start:1;
    grid-column-end: 16;
  }

`
