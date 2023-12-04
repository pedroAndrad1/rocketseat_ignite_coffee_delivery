import { useEffect, useState } from 'react'
import useToast from '../../../custom-hooks/useToast'
import { GENERIC_ERROR_MESSAGE } from '../../../constants/error-messages'
import { Loading } from '../../../components/Loading'
import Container from '../../../components/Container'
import { PedidoListItem, PedidosList } from './styles'
import { usePedidos } from '../../../custom-hooks/usePedidos'
import { PedidoMapped } from '../../../interfaces'
import { usePreco } from '../../../custom-hooks/usePreco'

export const HistoricoPedidos = () => {
  const { error } = useToast()
  const { getPedidos } = usePedidos()
  const { formatPreco } = usePreco()
  const [loading, setLoading] = useState(true)
  const [pedidosItems, setPedidosItems] = useState<PedidoMapped[]>([])

  useEffect(() => {
    if (loading) {
      getPedidos()
        .then((res) => {
          // console.log(res)
          setPedidosItems(res)
        })
        .catch((err) => {
          console.log(err)
          error(
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : GENERIC_ERROR_MESSAGE,
          )
        })
        .finally(() => setLoading(false))
    }
  }, [error, loading, getPedidos])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <main>
            <h1>Histórico de pedidos</h1>
            <PedidosList>
              {pedidosItems.map((pedidosItem, i) => {
                return (
                  <PedidoListItem key={`InventarioListItem___${i}`}>
                    <p>{pedidosItem.date}</p>
                    <ul>
                      {pedidosItem.produtosComprados.map((produto, i) => {
                        return (
                          <li key={`produtoListItem___${i}`}>
                            {produto.nome} : {produto.quantidade}
                          </li>
                        )
                      })}
                    </ul>
                    <p>{formatPreco(pedidosItem.total)}</p>
                  </PedidoListItem>
                )
              })}
            </PedidosList>
          </main>
        </Container>
      )}
    </>
  )
}
