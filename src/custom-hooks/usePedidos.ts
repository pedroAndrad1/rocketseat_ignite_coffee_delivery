import { useKeycloak } from '@react-keycloak/web'
import { api } from '../api/axios'
import { Produto } from '../interfaces'
import { useHeaders } from './useHeaders'

export const usePedidos = () => {
  const { keycloak } = useKeycloak()
  const { mountHeaders } = useHeaders()

  const savePedido = (produtoRaw: Produto, options?: { update: boolean }) => {
    const produto = {
      ...produtoRaw,
      ativo: true,
    }

    if (options?.update) {
      return api.put('/produtos', produto, {
        headers: mountHeaders(keycloak.token),
      })
    } else {
      return api.post('/produtos', produto, {
        headers: mountHeaders(keycloak.token),
      })
    }
  }

  const getPedidos = () => {
    return api.get<any>('/produtos?size=99999', {
      headers: mountHeaders(keycloak.token),
    })
  }

  const getPedido = (id: string) => {
    return api.get<any>(`/pedidos/${id}`, {
      headers: mountHeaders(keycloak.token),
    })
  }

  return {
    savePedido,
    getPedidos,
    getPedido,
  }
}
