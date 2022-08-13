import { Router } from './Router'
import { GithubProvider } from './contexts/GithubContext'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GithubProvider>
  )
}
