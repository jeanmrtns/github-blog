import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API,
  params: {
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  },
})
