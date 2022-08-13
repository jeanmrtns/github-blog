import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { api } from '../../lib/axios'
import { AboutMe } from './components/AboutMe'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Post {
  id: number
  title: string
  created_at: string
  body: string
}

const searchPostsSchema = zod.object({
  query: zod.string(),
})

type SearchData = zod.infer<typeof searchPostsSchema>

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const { register, handleSubmit } = useForm<SearchData>({
    resolver: zodResolver(searchPostsSchema),
  })

  async function getPosts(query = '') {
    const { data } = await api.get(
      `/search/issues?q=${query}%20repo:${import.meta.env.VITE_GITHUB_USER}/${
        import.meta.env.VITE_GITHUB_REPO
      }`,
    )

    setPosts(data.items)
  }

  async function handleSearchPostsByName(data: SearchData) {
    getPosts(data.query)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <AboutMe />
      <section className="mt-16">
        <form onSubmit={handleSubmit(handleSearchPostsByName)}>
          <div className="flex items-center justify-between">
            <strong className="text-lg text-base-subtitle">Publicações</strong>
            <span className="text-base-span text-sm">
              {posts.length === 0
                ? 'Ainda não há publicações'
                : posts.length === 1
                ? '1 publicação'
                : `${posts.length} publicações`}
            </span>
          </div>
          <input
            type="text"
            className="w-full mt-3 rounded text-base-text bg-base-input border border-base-border px-4 py-3 placeholder:text-base-label outline-none focus:border-blue hover:border-blue transition-all"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-8 bg-base-post rounded-lg h-64 overflow-hidden"
            >
              <header className="flex flex-col md:flex-row md:items-center justify-between">
                <Link to={`articles/${post.id}`}>
                  <strong className="text-xl text-base-title">
                    {post.title}
                  </strong>
                </Link>
                <time className="text-base-span text-xs md:text-sm">
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </time>
              </header>
              <div className="mt-5">
                <ReactMarkdown>{post.body.slice(0, 300)}</ReactMarkdown>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
