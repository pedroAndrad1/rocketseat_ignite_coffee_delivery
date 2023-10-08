import { useEffect, useState } from 'react'
import Container from '../../../components/Container'
import { Loading } from '../../../components/Loading'
import { InventarioList } from './styles'
import { useInventario } from '../../../custom-hooks/useInventario'
import { InventarioWithProduto } from '../../../interfaces'
import useToast from '../../../custom-hooks/useToast'
import { GENERIC_ERROR_MESSAGE } from '../../../constants/error-messages'
import { InventarioListItem } from './InventarioListItem'

export const AlterarInventario = () => {
  const { getInventario } = useInventario()
  const { error } = useToast()
  const [loading, setLoading] = useState(true)
  const [inventarioItems, setInventarioItems] = useState<
    InventarioWithProduto[]
  >([])

  useEffect(() => {
    if (loading) {
      getInventario()
        .then((res) => setInventarioItems(res))
        .catch((err) => {
          console.log(err)
          error(
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : GENERIC_ERROR_MESSAGE,
          )
        })
        .finally(() => setLoading(false))
    }
  }, [getInventario, error, loading])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <main>
            <h1>Alterar Inventario</h1>
            <InventarioList>
              {inventarioItems.map((inventarioItem, i) => {
                return (
                  <InventarioListItem
                    key={`InventarioListItem___${i}`}
                    {...inventarioItem}
                  />
                )
              })}
            </InventarioList>
          </main>
        </Container>
      )}
    </>
  )
}
