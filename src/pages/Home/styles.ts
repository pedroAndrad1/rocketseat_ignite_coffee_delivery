import styled from 'styled-components'

export const HomeWrapper = styled.main``

export const IntroContainer = styled.section`
  background-image: url('src/assets/intro_background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 5rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2.75rem;
  line-height: 3.5rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
  margin: 0;
  margin-bottom: 1rem;
`

export const SubTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin: 0;
  margin-bottom: 2.5rem;
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
interface ItemProps {
  iconContainerColor: string
}
export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.iconContainerColor};
    border-radius: 9999px;
    padding: 0.5rem;
  }

  p {
    margin: 0;
  }
`
export const IntroImg = styled.img`
  width: 476px;
  height: 360px;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 2rem;
  text-align: left;
`

export const CoffeList = styled.section`
  display: grid;
  gap: 1rem;
  margin-bottom: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProductsListContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 300px) {
    align-items: center;
  }
`
