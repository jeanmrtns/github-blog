import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { api } from '../../../../lib/axios'

interface User {
  id: number
  avatar_url: string
  name: string
  login: string
  bio: string
  company?: string
  followers: number
}

export function AboutMe() {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    async function getUser() {
      const response = await api.get<User>(
        `/users/${import.meta.env.VITE_GITHUB_USER}`,
      )

      setUser(response.data)
    }

    getUser()
  }, [])

  return (
    <div className="flex flex-col md:flex-row px-10 py-8 bg-base-profile w-full -mt-24 rounded-[10px] shadow-black gap-8 items-center">
      <img src={user.avatar_url} alt="" className="h-36 w-36 rounded-lg" />
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl text-base-title font-bold">{user.name}</h3>
          <a
            href={`https://github.com/${user.login}`}
            target="__blank"
            className="flex items-center gap-1 no-underline text-blue text-[12px] font-bold uppercase hover:underline hover:underline-offset-8"
          >
            <span>Github</span>
            <ArrowSquareOut size={16} />
          </a>
        </div>

        <p className="text-base mt-2 text-center md:text-left">{user.bio}</p>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <GithubLogo />
            {user.login}
          </span>
          {user.company && (
            <span className="flex items-center gap-2 text-base-subtitle">
              <Buildings />
              {user.company}
            </span>
          )}
          <span className="flex items-center gap-2 text-base-subtitle">
            <Users />
            {user.followers} seguidores
          </span>
        </div>
      </div>
    </div>
  )
}
