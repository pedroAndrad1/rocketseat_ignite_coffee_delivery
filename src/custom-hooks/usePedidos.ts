import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import {
  GetAllProdutosAdminResponse,
  GetPedidosResponse,
  Pedido,
  PedidoItem,
  PedidoItemLinhaItemPedidoResponse,
  PedidoMapped,
  Produto,
} from '../interfaces'
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
        codigoSku: carrinhoItem.produto.id as string,
        preco: carrinhoItem.produto.preco,
        quantidade: carrinhoItem.amount as number,
      }
    })

  const getPedidos = async () => {
    const pedidosRaw = await api.get<GetPedidosResponse>('/pedidos', {
      headers: mountHeaders(keycloak.token),
    })

    return await mapPedidos(pedidosRaw.data)
  }

  const mapPedidos = async (pedidosRaw: GetPedidosResponse) => {
    const produtos = await api.get<GetAllProdutosAdminResponse>(
      '/produtos/admin',
      {
        headers: mountHeaders(keycloak.token),
      },
    )

    return pedidosRaw._embedded.pedidoDataList.map<PedidoMapped>(
      (pedidoRaw) => {
        return {
          date: new Date(pedidoRaw.createdAt).toLocaleDateString(),
          produtosComprados: mapProdutosComprados(
            pedidoRaw.linhaItemPedidoDataList._embedded.linhaItemPedidoDataList,
            produtos.data._embedded.produtoDataList,
          ),
          total: somaPedidoTotal(
            pedidoRaw.linhaItemPedidoDataList._embedded.linhaItemPedidoDataList,
          ),
        }
      },
    )
  }

  const mapProdutosComprados = (
    produtosRaw: PedidoItemLinhaItemPedidoResponse[],
    produtos: Produto[],
  ) => {
    return produtosRaw.map<{
      nome: string | undefined
      quantidade: number
    }>((produtoRaw) => {
      return {
        nome: produtos.find((produto) => produto.id === produtoRaw.codigoSku)
          ?.nome,
        quantidade: produtoRaw.quantidade,
      }
    })
  }

  const somaPedidoTotal = (produtosRaw: PedidoItemLinhaItemPedidoResponse[]) =>
    produtosRaw.reduce<number>((acc, current) => acc + current.preco, 0)

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
