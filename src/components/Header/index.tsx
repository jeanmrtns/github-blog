import { Link } from 'react-router-dom'
import GithubBlogLogoImg from '../../assets/github-blog-logo.svg'

export function Header() {
  return (
    <header className="pb-[134px] pt-16 w-full bg-center bg-cover bg-[url('/public/img/header-cover.svg')]">
      <Link to="/">
        <img src={GithubBlogLogoImg} className="block mx-auto" alt="" />
      </Link>
    </header>
  )
}
