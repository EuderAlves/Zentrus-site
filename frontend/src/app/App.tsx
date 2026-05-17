import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { ScrollToTop } from '../components/layout/ScrollToTop'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProcessPage } from '../pages/ProcessPage'
import { QuotePage } from '../pages/QuotePage'
import { ServicesPage } from '../pages/ServicesPage'
import { SolutionsPage } from '../pages/SolutionsPage'
import '../styles/app.css'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="servicos" element={<ServicesPage />} />
          <Route path="solucoes" element={<SolutionsPage />} />
          <Route path="processo" element={<ProcessPage />} />
          <Route path="orcamento" element={<QuotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
