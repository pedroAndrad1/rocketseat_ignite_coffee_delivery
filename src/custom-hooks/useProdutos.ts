import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import { Produto } from '../interfaces'

export const useProdutos = () => {
  const { keycloak } = useKeycloak()

  const mountHeaders = (token: string | undefined) => {
    return {
      Authorization: 'Bearer ' + token,
    }
  }

  const saveProduto = (produtoRaw: Produto) => {
    const produto = {
      ...produtoRaw,
      ativo: true,
    }
    return api.post('/produtos', produto, {
      headers: mountHeaders(keycloak.token),
    })
  }

  const getProdutos = () => {
    return api.post(' /produtos/admin', {
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
  }
}
