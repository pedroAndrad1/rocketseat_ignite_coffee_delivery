import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import { GetProdutosAdminResponse, Produto } from '../interfaces'

export const useProdutos = () => {
  const { keycloak } = useKeycloak()

  const mountHeaders = (token: string | undefined) => {
    return {
      Authorization: 'Bearer ' + token,
    }
  }

  const saveProduto = (produtoRaw: Produto, options?: { update: boolean }) => {
    const produto = {
      ...produtoRaw,
      ativo: true,
    }

    if (options?.update) {
      return api.put('/produtos', produto, {
        headers: mountHeaders(keycloak.token),
      })
    } else {
      return api.post('/produtos', produto, {
        headers: mountHeaders(keycloak.token),
      })
    }
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
