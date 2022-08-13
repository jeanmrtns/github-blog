import {
  ArrowSquareOut,
  GithubLogo,
  ArrowLeft,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
import { Link } from 'react-router-dom'

interface DetailsProps {
  title: string
  username: string
  updatedAt: string
  comments: number
}

export function Details({
  title,
  username,
  updatedAt,
  comments,
}: DetailsProps) {
  return (
    <div className="flex flex-col md:flex-row px-10 py-8 bg-base-profile w-full -mt-24 rounded-[10px] shadow-black gap-8 items-start">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1 no-underline text-blue text-[12px] font-bold uppercase hover:underline hover:underline-offset-8"
          >
            <ArrowLeft />
            Voltar
          </Link>
          <a
            href={`https://github.com/${username}`}
            target="__blank"
            className="flex items-center gap-1 no-underline text-blue text-[12px] font-bold uppercase hover:underline hover:underline-offset-8"
          >
            <span className="uppercase">Ver no github</span>
            <ArrowSquareOut size={16} />
          </a>
        </div>

        <p className="mt-5 font-bold text-base-title text-2xl text-center md:text-start">
          {title}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <GithubLogo />
            {username}
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <Calendar />
            {updatedAt}
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <ChatCircle />
            {comments} comentários
          </span>
        </div>
      </div>
    </div>
  )
}
