import { Link } from 'react-router-dom'
import { AboutMe } from './components/AboutMe'

export function Home() {
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
          <li className="p-8 bg-base-post rounded-lg h-64 overflow-hidden">
            <header className="flex flex-col md:flex-row md:items-center justify-between">
              <Link to={`articles/123`}>
                <strong className="text-xl text-base-title">
                  JavaScript data types and data structures
                </strong>
              </Link>
              <time className="text-base-span text-xs md:text-sm">
                Há 1 dia
              </time>
            </header>
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et hic,
              porro, quisquam, quis consectetur officia voluptatum saepe iure
              molestiae atque cumque harum natus quam nam voluptatibus iste
              perferendis voluptates sequi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Et hic, porro, quisquam, quis
              consectetur officia voluptatum saepe iure molestiae atque cumque
              harum natus quam nam voluptatibus iste perferendis voluptates
              sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Et hic, porro, quisquam, quis consectetur officia voluptatum saepe
              iure molestiae atque cumque harum natus quam nam voluptatibus iste
              perferendis voluptates sequi.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
