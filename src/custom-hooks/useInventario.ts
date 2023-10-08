import { useKeycloak } from '@react-keycloak/web'
import { useHeaders } from './useHeaders'
import { api } from '../api/axios'
import {
  GetInventarioAdminResponse,
  GetProdutosAdminResponse,
  InventarioItem,
  InventarioWithProduto,
  Produto,
} from '../interfaces'

export const useInventario = () => {
  const { keycloak } = useKeycloak()
  const { mountHeaders } = useHeaders()

  const getInventario = async () => {
    const inventario = await api.get<GetInventarioAdminResponse>(
      '/inventario/admin',
      {
        headers: mountHeaders(keycloak.token),
      },
    )

    if (!inventario) throw new Error('Erro ao buscar inventário')

    return mapInventario(inventario.data._embedded.inventarioDataList)
  }

  const mapInventario = async (inventario: InventarioItem[]) => {
    const produtos = await api.get<GetProdutosAdminResponse>(
      '/produtos?size=99999',
      {
        headers: mountHeaders(keycloak.token),
      },
    )
    if (!produtos) throw new Error('Erro ao buscar produtos para mapeamento!')

    return mapInventarioWithProduto(inventario, produtos.data.produtos.content)
  }

  const mapInventarioWithProduto = (
    inventario: InventarioItem[],
    produtos: Produto[],
  ) => {
    return inventario.map((inventarioItem) => {
      const produto = findProdutoById(inventarioItem.skuCode, produtos)

      const inventarioWithProduto: InventarioWithProduto = {
        inventarioId: inventarioItem.id as string,
        produtoId: produto.id as string,
        produtoImageUrl: produto.imageUrl,
        produtoNome: produto.nome,
        quantity: inventarioItem.quantity,
      }

      return inventarioWithProduto
    })
  }

  const findProdutoById = (id: string, produtos: Produto[]) => {
    const produto = produtos.find((produto) => produto.id === id)
    if (!produto) throw new Error('Inventário tem produto inexistente')
    return produto
  }

  const saveInventario = (
    inventario: InventarioItem,
    options?: { update: boolean },
  ) => {
    if (!options?.update) {
      return api.post('/inventario', inventario, {
        headers: mountHeaders(keycloak.token),
      })
    } else {
      return api.put('/inventario', inventario, {
        headers: mountHeaders(keycloak.token),
      })
    }
  }

  return {
    getInventario,
    saveInventario,
  }
}
