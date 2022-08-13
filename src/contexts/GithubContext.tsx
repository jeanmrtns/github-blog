import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Post {
  id: number
  title: string
  created_at: string
  body: string
}

interface GithubContextData {
  posts: Post[]
  getPosts: (query: string) => void
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextData)

export function GithubProvider({ children }: GithubProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function getPosts(query = '') {
    const { data } = await api.get(
      `/search/issues?q=${query}%20repo:${import.meta.env.VITE_GITHUB_USER}/${
        import.meta.env.VITE_GITHUB_REPO
      }`,
    )

    setPosts(data.items)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <GithubContext.Provider value={{ getPosts, posts }}>
      {children}
    </GithubContext.Provider>
  )
}
