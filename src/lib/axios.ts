import axios from 'axios'
import { GITHUB_API } from '../constants'

export const api = axios.create({
  baseURL: GITHUB_API,
  params: {
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  },
})
