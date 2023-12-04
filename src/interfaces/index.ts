export interface Produto {
  id?: string
  nome: string
  descricao: string
  preco: number
  tipo: string[]
  imageUrl: string
  ativo?: boolean
}

export interface GetProdutosResponse {
  produtos: {
    content: Produto[]
  }
}

export interface InventarioItem {
  id?: string
  skuCode: string
  quantity: number
}

export interface GetInventarioAdminResponse {
  _embedded: {
    inventarioDataList: InventarioItem[]
  }
}

export interface InventarioWithProduto {
  inventarioId: string
  produtoId: string
  produtoNome: string
  produtoImageUrl: string
  quantity: number
  status: 'ativo' | 'inativo'
}

export interface PedidoItem {
  codigoSku: string
  preco: number
  quantidade: number
}

export interface Pedido {
  id?: number
  pedidoNumero: string
  linhaItemPedidoDataList: {
    _embedded: {
      linhaItemPedidoDataList: PedidoItem[]
    }
  }
}

export interface GetAllProdutosAdminResponse {
  _embedded: {
    produtoDataList: Produto[]
  }
}

export interface PedidoItemLinhaItemPedidoResponse {
  codigoSku: string
  preco: number
  quantidade: number
}

interface PedidoItemResponse {
  id: number
  pedidoNumero: string
  createdAt: string
  linhaItemPedidoDataList: {
    _embedded: {
      linhaItemPedidoDataList: PedidoItemLinhaItemPedidoResponse[]
    }
  }
}

export interface GetPedidosResponse {
  _embedded: {
    pedidoDataList: PedidoItemResponse[]
  }
}

export interface PedidoMapped {
  date: string
  total: number
  produtosComprados: {
    nome: string | undefined
    quantidade: number
  }[]
}
