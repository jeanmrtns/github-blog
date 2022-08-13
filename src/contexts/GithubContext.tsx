import { createContext, ReactNode, useEffect, useState } from 'react'
import { GITHUB_REPO, GITHUB_USER } from '../constants'
import { api } from '../lib/axios'

interface Post {
  id: number
  title: string
  created_at: string
  updated_at: string
  body: string
  number: number
  comments: number
  user: {
    login: string
  }
}

interface GithubContextData {
  posts: Post[]
  getPosts: (query: string) => void
  getPost: (number: number) => Promise<Post>
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export function GithubProvider({ children }: GithubProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function getPosts(query = '') {
    const { data } = await api.get(
      `/search/issues?q=${query}%20repo:${GITHUB_USER}/${GITHUB_REPO}`,
    )

    setPosts(data.items)
  }

  async function getPost(number: number) {
    const url = `/repos/${GITHUB_USER}/${GITHUB_REPO}/issues/${number}`

    const { data } = await api.get<Post>(url)

    return data
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <GithubContext.Provider value={{ getPosts, posts, getPost }}>
      {children}
    </GithubContext.Provider>
  )
}
