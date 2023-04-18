import styled from "styled-components";

export const ConfirmacaoContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  padding: 5rem;
  padding-top: 1rem ;

  img{
    width: 100%;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;
export const CompraContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  > h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.5rem;
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 2rem;
  }
`;

export const LinerGradientRadiusBorder = styled.div`
  padding: 1px;
  background: linear-gradient(
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  border-radius: 6px 36px;
`

export const CompraInfos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.background};

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    p, span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: ${props => props.theme["base-text"]};
    }

    b{
        font-weight: 700;
    }
  }
`;

interface InfoProps{
  iconContainerColor?: string;
}
export const Info = styled.li<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem ;

  span{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.iconContainerColor};
      border-radius: 9999px;
      padding: 0.5rem ;
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p{
        margin: 0;
    }
  }

`