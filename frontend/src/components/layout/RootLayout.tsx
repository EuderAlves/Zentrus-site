import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function RootLayout() {
  return (
    <div className="app-shell">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
