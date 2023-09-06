const useCorreios = () => {
  const findByCep = async (cep: string) => {
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(async (res) => await res.json())
      .catch((err) => console.error(err))

    return data
  }

  return {
    findByCep,
  }
}

export default useCorreios
