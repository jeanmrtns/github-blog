import { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

export function useGithub() {
  const context = useContext(GithubContext)

  return context
}
