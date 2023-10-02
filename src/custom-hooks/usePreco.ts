export const usePreco = () => {
  const formatPreco = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

  return {
    formatPreco,
  }
}
