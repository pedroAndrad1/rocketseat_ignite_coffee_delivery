import { api } from '../api/axios'
import { Produto } from '../interfaces'

const mountHeaders = (token: string | undefined) => {
  return {
    Authorization: 'Bearer ' + token,
  }
}

const saveProduto = (produtoRaw: Produto, token: string | undefined) => {
  const produto = {
    ...produtoRaw,
    ativo: true,
  }
  return api.post('/produtos', produto, {
    headers: mountHeaders(token),
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

export const useProdutos = () => {
  return {
    saveProduto,
    mountNewProduct,
  }
}
