import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

export function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row px-10 py-8 bg-base-profile w-full -mt-24 rounded-[10px] shadow-black gap-8 items-center">
      <img
        src="https://github.com/jeanmrtns.png"
        alt=""
        className="h-36 w-36 rounded-lg"
      />
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl text-base-title font-bold">Jean Martins</h3>
          <a
            href="https://github.com/jeanmrtns"
            target="__blank"
            className="flex items-center gap-1 no-underline text-blue text-[12px] font-bold uppercase hover:underline hover:underline-offset-8"
          >
            <span>Github</span>
            <ArrowSquareOut size={16} />
          </a>
        </div>

        <p className="text-base mt-2 text-center md:text-left">
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
            <Buildings />
            udooku LLC
          </span>
          <span className="flex items-center gap-2 text-base-subtitle">
            <Users />
            32 seguidores
          </span>
        </div>
      </div>
    </div>
  )
}
