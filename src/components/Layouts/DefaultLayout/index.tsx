import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-1 py-2">
        <Outlet />
      </main>
    </>
  )
}
