import styled from 'styled-components'

const ContainerBox = styled.div`
  max-width: calc(100% - (2 * 10rem));
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 3rem;
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container = ({ children }: any) => {
  return <ContainerBox>{children}</ContainerBox>
}
export default Container
