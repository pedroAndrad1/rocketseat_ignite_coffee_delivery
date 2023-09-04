import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://Pedro:8080/api',
})
