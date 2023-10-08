export interface Produto {
  id?: string
  nome: string
  descricao: string
  preco: number
  tipo: string[]
  imageUrl: string
  ativo?: boolean
}

export interface GetProdutosAdminResponse {
  produtos: {
    content: Produto[]
  }
}

export interface InventarioItem {
  id?: string
  skuCode: string
  quantity: number
}
