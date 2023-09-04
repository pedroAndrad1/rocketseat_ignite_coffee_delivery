export interface Produto {
  id?: string
  nome: string
  descricao: string
  preco: number
  tipo: string[]
  imageUrl: string
  ativo?: boolean
}
