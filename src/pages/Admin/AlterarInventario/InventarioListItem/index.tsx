import { useState } from 'react'
import { InventarioItem, InventarioWithProduto } from '../../../../interfaces'
import {
  InventarioListItemSubmitButton,
  StyledInventarioListItem,
} from './styles'
import Counter from '../../../../components/Counter'
import { useInventario } from '../../../../custom-hooks/useInventario'
import useToast from '../../../../custom-hooks/useToast'
import { GENERIC_ERROR_MESSAGE } from '../../../../constants/error-messages'

export const InventarioListItem = (inventarioItem: InventarioWithProduto) => {
  const { saveInventario } = useInventario()
  const { success, error } = useToast()
  const [quantity, setQuantity] = useState(inventarioItem.quantity)

  const increaseQuantity = () => {
    setQuantity((actualQuantity) => actualQuantity + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((actualQuantity) => actualQuantity - 1)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = (e: any) => {
    e.preventDefault()
    const inventarioToSave: InventarioItem = {
      id: inventarioItem.inventarioId,
      skuCode: inventarioItem.produtoId,
      quantity,
    }
    saveInventario(inventarioToSave, { update: true })
      .then(() => success('Inventário atualizado'))
      .catch(() => error(GENERIC_ERROR_MESSAGE))
  }

  return (
    <StyledInventarioListItem>
      <img
        src={inventarioItem.produtoImageUrl}
        alt={inventarioItem.produtoNome}
      />
      <ul>
        <li>
          <strong>{inventarioItem.produtoNome}</strong>
        </li>
        <li>
          <form onSubmit={handleUpdate}>
            <Counter
              counterValue={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
            <InventarioListItemSubmitButton type="submit">
              Atualizar
            </InventarioListItemSubmitButton>
          </form>
        </li>
      </ul>
    </StyledInventarioListItem>
  )
}
