import { useEffect, useState } from 'react'
import Container from '../../../components/Container'
import { Produto } from '../../../interfaces'
import { useProdutos } from '../../../custom-hooks/useProdutos'
import useToast from '../../../custom-hooks/useToast'
import { GENERIC_ERROR_MESSAGE } from '../../../constants/error-messages'
import { Loading } from '../../../components/Loading'
import { ProdutosToManageList } from './ProdutosToManageList'

export const AlterarProduto = () => {
  const { getProdutos } = useProdutos()
  const { error } = useToast()
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      getProdutos()
        .then((res) => setProdutos(res.data.produtos.content))
        .catch((err) =>
          error(
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : GENERIC_ERROR_MESSAGE,
          ),
        )
        .finally(() => setLoading(false))
    }
  }, [getProdutos, error, loading])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <main>
            <h1>Alterar Produto</h1>
            <ProdutosToManageList produtos={produtos} />
          </main>
        </Container>
      )}
    </>
  )
}
