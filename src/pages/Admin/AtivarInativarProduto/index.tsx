import { useCallback, useEffect, useState } from 'react'
import Container from '../../../components/Container'
import { Produto } from '../../../interfaces'
import { useProdutos } from '../../../custom-hooks/useProdutos'
import useToast from '../../../custom-hooks/useToast'
import { GENERIC_ERROR_MESSAGE } from '../../../constants/error-messages'
import { Loading } from '../../../components/Loading'
import {
  AtivarInativarList,
  AtivarInativarListItem,
  AtivarInativarUpdateButton,
} from './styles'

export const AtivarInativarProduto = () => {
  const { getAllProdutos, ativarInativarProduto } = useProdutos()
  const { error, success } = useToast()
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  const fechtProdutos = useCallback(() => {
    setLoading(true)
    getAllProdutos()
      .then((res) => setProdutos(res.data._embedded.produtoDataList))
      .catch((err) =>
        error(
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : GENERIC_ERROR_MESSAGE,
        ),
      )
      .finally(() => setLoading(false))
  }, [error, getAllProdutos])

  useEffect(() => {
    if (loading) {
      fechtProdutos()
    }
  }, [fechtProdutos, loading])

  const updateProdutoStatus = (produto: Produto) => {
    ativarInativarProduto(produto.id as string)
      .then(() => {
        success('O status do produto foi alterado com sucesso')
        fechtProdutos()
      })
      .catch(() => error(GENERIC_ERROR_MESSAGE))
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <main>
            <h1>Ativar/Inativar Produto</h1>
            <AtivarInativarList>
              {produtos.map((produto, i) => {
                return (
                  <AtivarInativarListItem key={`AtivarInativarListItem__${i}`}>
                    <img src={produto.imageUrl} alt={produto.nome} />
                    <ul>
                      <li>
                        <strong>{produto.nome}</strong>
                      </li>
                      <li>{produto.ativo ? 'Ativo' : 'Inativo'}</li>
                      <li>
                        <AtivarInativarUpdateButton
                          onClick={() => updateProdutoStatus(produto)}
                        >
                          {produto.ativo ? 'Inativar' : 'Ativar'}
                        </AtivarInativarUpdateButton>
                      </li>
                    </ul>
                  </AtivarInativarListItem>
                )
              })}
            </AtivarInativarList>
          </main>
        </Container>
      )}
    </>
  )
}
