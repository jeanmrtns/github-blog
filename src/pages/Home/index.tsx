import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import { AboutMe } from './components/AboutMe'

interface Post {
  id: number
  title: string
  created_at: string
  body: string
}

export function Home() {
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
    <>
      <AboutMe />
      <section className="mt-16">
        <form>
          <div className="flex items-center justify-between">
            <strong className="text-lg text-base-subtitle">Publicações</strong>
            <span className="text-base-span text-sm">6 publicações</span>
          </div>
          <input
            type="text"
            className="w-full mt-3 rounded text-base-text bg-base-input border border-base-border px-4 py-3 placeholder:text-base-label outline-none focus:border-blue hover:border-blue transition-all"
            placeholder="Buscar conteúdo"
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
                  {post.created_at}
                </time>
              </header>
              <p className="mt-5">{post.body.slice(0, 300)}...</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
