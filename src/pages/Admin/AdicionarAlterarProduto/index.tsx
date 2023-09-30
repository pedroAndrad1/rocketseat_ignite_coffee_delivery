import { FormEvent, useEffect, useState } from 'react'
import { Input } from '../../../components/FormComponents/Input'
import { AddProdutoForm } from './styles'
import { TextArea } from '../../../components/FormComponents/TextArea'
import Container from '../../../components/Container'
import { SubmitButton } from '../../../components/FormComponents/SubmitButton'
import { useProdutos } from '../../../custom-hooks/useProdutos'
import useToast from '../../../custom-hooks/useToast'
import { GENERIC_ERROR_MESSAGE } from '../../../constants/error-messages'
import { Produto } from '../../../interfaces'
import { useParams } from 'react-router-dom'
import { Loading } from '../../../components/Loading'

export const AdicionarAlterarProduto = () => {
  const { produtoId } = useParams()
  const { mountNewProduct } = useProdutos()
  const [produto, setProduto] = useState<Produto>(mountNewProduct())
  const [loading, setLoading] = useState(true)
  const [tiposProxy, setTiposProxy] = useState('')

  useEffect(() => {
    if (produtoId) {
      // pegar produto a partir do id
    } else {
      setLoading(false)
    }
  }, [produtoId])

  const { saveProduto } = useProdutos()
  const { error, success } = useToast()

  const handleValuesChange = (
    keyName: string,
    value: string | string[] | number,
  ) => {
    if (!Object.keys(produto).includes(keyName))
      throw new Error(
        'keyname não existe entre as chaves da interface Produto!',
      )

    setProduto((actualInfo) => {
      return {
        ...actualInfo,
        [keyName]: value,
      }
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTiposChange = (e: any) => {
    setTiposProxy(e.target.value)
    setProduto((actualInfo) => {
      return {
        ...actualInfo,
        tipo: (e.target.value as string)
          .split(' ')
          .filter((tipo) => tipo !== ''),
      }
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    saveProduto(produto)
      .then(() => {
        success('Produto salvo!')
        cleanFormFields()
      })
      .catch((err) => {
        error(
          err.response.data.message
            ? err.response.data.message
            : GENERIC_ERROR_MESSAGE,
        )
      })
  }

  const cleanFormFields = () => {
    setTiposProxy('')
    setProduto(mountNewProduct())
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <main>
            <h1>{produto ? 'Alterar Produto' : 'Adicionar Produto'}</h1>
            <AddProdutoForm onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome">Nome:</label>
                <Input
                  value={produto.nome}
                  onChange={(e) => handleValuesChange('nome', e.target.value)}
                  name="nome"
                />
              </div>
              <div>
                <label htmlFor="descricao">Descrição:</label>
                <TextArea
                  value={produto.descricao}
                  onChange={(e) =>
                    handleValuesChange('descricao', e.target.value)
                  }
                  name="descricao"
                />
              </div>
              <div>
                <label htmlFor="preco">Preço:</label>
                <Input
                  type="number"
                  step=".1"
                  min={0}
                  value={produto.preco}
                  onChange={(e) =>
                    handleValuesChange(
                      'preco',
                      Number.parseFloat(e.target.value),
                    )
                  }
                  name="preco"
                />
              </div>
              <div>
                <label htmlFor="tipos">Tipos:</label>
                <Input
                  value={tiposProxy}
                  name="tipos"
                  placeholder="Escreva múltiplos tipos, separando-os por espaço."
                  onChange={handleTiposChange}
                />
              </div>
              <div>
                <label htmlFor="imagem">Endereço da imagem:</label>
                <Input
                  value={produto.imageUrl}
                  onChange={(e) =>
                    handleValuesChange('imageUrl', e.target.value)
                  }
                  name="imagem"
                />
              </div>
              <SubmitButton
                disabled={
                  !produto.nome ||
                  !produto.descricao ||
                  !produto.preco ||
                  !produto.tipo.length ||
                  !produto.imageUrl
                }
              >
                Confirmar
              </SubmitButton>
            </AddProdutoForm>
          </main>
        </Container>
      )}
    </>
  )
}
