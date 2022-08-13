import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/Layouts/DefaultLayout'
import { Article } from './pages/Article'
import { Home } from './pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
