import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import {
  GetAllProdutosAdminResponse,
  GetProdutosResponse,
  InventarioItem,
  Produto,
} from '../interfaces'
import { useHeaders } from './useHeaders'

export const useProdutos = () => {
  const { keycloak } = useKeycloak()
  const { mountHeaders } = useHeaders()

  const saveProduto = (
    produtoRaw: Produto,
    options?: { update?: boolean; quantity?: number },
  ) => {
    const produto = {
      ...produtoRaw,
      ativo: options?.update ? produtoRaw.ativo : true,
    }

    if (options?.update) {
      return api.put('/produtos', produto, {
        headers: mountHeaders(keycloak.token),
      })
    } else {
      return handleSaveNewProduto(produto, options?.quantity || 10)
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

  const getAllProdutos = () => {
    return api.get<GetAllProdutosAdminResponse>('/produtos/admin', {
      headers: mountHeaders(keycloak.token),
    })
  }

  const getProdutos = () => {
    return api.get<GetProdutosResponse>('/produtos?size=99999')
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

  const ativarInativarProduto = (id: string) => {
    return api.patch<Produto>(
      `/produtos/toggle-status-produto/${id}`,
      {},
      {
        headers: mountHeaders(keycloak.token),
      },
    )
  }

  return {
    saveProduto,
    mountNewProduct,
    getAllProdutos,
    getProdutos,
    getProduto,
    ativarInativarProduto,
  }
}
