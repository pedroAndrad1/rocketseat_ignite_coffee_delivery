import { FormEvent, useState } from 'react'
import { Input } from '../../../components/FormComponents/Input'
import { AddProdutoForm } from './styles'
import { TextArea } from '../../../components/FormComponents/TextArea'
import Container from '../../../components/Container'
import { SubmitButton } from '../../../components/FormComponents/SubmitButton'
// import useToast from '../../../custom-hooks/useToast'

export const AdicionarProduto = () => {
  // const {error} = useToast()
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [tipos, setTipos] = useState<string[]>([])
  const [tiposProxy, setTiposProxy] = useState('')
  const [imagemUrl, setImagemUrl] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTiposChange = (e: any) => {
    setTiposProxy(e.target.value)
    setTipos((e.target.value as string).split(' '))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(nome, descricao, preco, tipos, imagemUrl)
  }

  return (
    <Container>
      <main>
        <h1>Adicionar Produto</h1>
        <AddProdutoForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              name="nome"
            />
          </div>
          <div>
            <label htmlFor="descricao">Descrição:</label>
            <TextArea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              name="descricao"
            />
          </div>
          <div>
            <label htmlFor="preco">Preço:</label>
            <Input
              type="number"
              step=".01"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
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
              value={imagemUrl}
              onChange={(e) => setImagemUrl(e.target.value)}
              name="imagem"
            />
          </div>
          <SubmitButton
            disabled={
              !nome || !descricao || !preco || !tipos.length || !imagemUrl
            }
          >
            Confirmar
          </SubmitButton>
        </AddProdutoForm>
      </main>
    </Container>
  )
}
