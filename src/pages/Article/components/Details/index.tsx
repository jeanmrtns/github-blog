import {
  ArrowSquareOut,
  GithubLogo,
  ArrowLeft,
  Calendar,
  ChatCircle,
} from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Details() {
  return (
    <div className="flex flex-col md:flex-row px-10 py-8 bg-base-profile w-full -mt-24 rounded-[10px] shadow-black gap-8 items-start">
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1 no-underline text-blue text-[12px] font-bold uppercase hover:underline hover:underline-offset-8"
          >
            <ArrowLeft />
            Voltar
          </Link>
          <a
            href="https://github.com/jeanmrtns"
            target="__blank"
            className="flex items-center gap-1 no-underline text-blue text-[12px] font-bold uppercase hover:underline hover:underline-offset-8"
          >
            <span className="uppercase">Ver no github</span>
            <ArrowSquareOut size={16} />
          </a>
        </div>

        <p className="mt-5 font-bold text-base-title text-2xl">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <span className="flex items-center gap-2 text-base-subtitle">
            <GithubLogo />
            jeanmrtns
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <Calendar />
            Há 1 dia
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <ChatCircle />5 comentários
          </span>
        </div>
      </div>
    </div>
  )
}
