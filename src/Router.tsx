import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/Layouts/DefaultLayout'
import { Article } from './pages/Article'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:number" element={<Article />} />
      </Route>
    </Routes>
  )
}
