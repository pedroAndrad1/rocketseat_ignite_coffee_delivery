import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import { Pedido, PedidoItem } from '../interfaces'
import { useHeaders } from './useHeaders'
import { useCarrinhoContext } from '../contexts/CarrinhoContext'
import { v4 as uuidv4 } from 'uuid'

export const usePedidos = () => {
  const { keycloak } = useKeycloak()
  const { mountHeaders } = useHeaders()
  const { carrinho } = useCarrinhoContext()

  const savePedido = () => {
    return api.post('/pedidos', buildPedido(), {
      headers: mountHeaders(keycloak.token),
    })
  }

  const buildPedido = (): Pedido => {
    return {
      pedidoNumero: uuidv4(),
      linhaItemPedidoDataList: {
        _embedded: {
          linhaItemPedidoDataList: buildPedidoList(),
        },
      },
    }
  }

  const buildPedidoList = () =>
    carrinho.map<PedidoItem>((carrinhoItem) => {
      return {
        id: Number.parseInt(carrinhoItem.produto.id as string),
        codigoSku: carrinhoItem.produto.id as string,
        preco: carrinhoItem.produto.preco,
        quantidade: carrinhoItem.amount as number,
        pedidoData: new Date().toLocaleString('pt-BR'),
      }
    })

  const getPedidos = () => {
    return api.get<any>('/produtos?size=99999', {
      headers: mountHeaders(keycloak.token),
    })
  }

  const getPedido = (id: string) => {
    return api.get<any>(`/pedidos/${id}`, {
      headers: mountHeaders(keycloak.token),
    })
  }

  return {
    savePedido,
    getPedidos,
    getPedido,
  }
}
