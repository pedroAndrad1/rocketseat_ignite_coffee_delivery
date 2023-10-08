export const useHeaders = () => {
  const mountHeaders = (token: string | undefined) => {
    return {
      Authorization: 'Bearer ' + token,
    }
  }

  return {
    mountHeaders,
  }
}
