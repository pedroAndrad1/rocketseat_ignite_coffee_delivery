import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import {
  GetProdutosAdminResponse,
  InventarioItem,
  Produto,
} from '../interfaces'
import { useHeaders } from './useHeaders'

export const useProdutos = () => {
  const { keycloak } = useKeycloak()
  const { mountHeaders } = useHeaders()

  const saveProduto = (
    produtoRaw: Produto,
    quantity = 10,
    options?: { update: boolean },
  ) => {
    const produto = {
      ...produtoRaw,
      ativo: true,
    }

    if (options?.update) {
      return api.put('/produtos', produto, {
        headers: mountHeaders(keycloak.token),
      })
    } else {
      return handleSaveNewProduto(produto, quantity)
    }
  }

  const handleSaveNewProduto = async (newProduto: Produto, quantity = 10) => {
    const produtosResponse = await api.post<Produto>('/produtos', newProduto, {
      headers: mountHeaders(keycloak.token),
    })

    if (!produtosResponse.data.id) {
      throw new Error('Erro ao salvar produto')
    }

    const inventarioItem: InventarioItem = {
      skuCode: produtosResponse.data.id,
      quantity,
    }

    return api.post('/inventario', inventarioItem, {
      headers: mountHeaders(keycloak.token),
    })
  }

  const getProdutos = () => {
    return api.get<GetProdutosAdminResponse>('/produtos?size=99999', {
      headers: mountHeaders(keycloak.token),
    })
  }

  const getProduto = (id: string) => {
    return api.get<Produto>(`/produtos/${id}`, {
      headers: mountHeaders(keycloak.token),
    })
  }

  const mountNewProduct = () => {
    return {
      nome: '',
      descricao: '',
      imageUrl: '',
      preco: 0,
      tipo: [],
    }
  }

  return {
    saveProduto,
    mountNewProduct,
    getProdutos,
    getProduto,
  }
}
