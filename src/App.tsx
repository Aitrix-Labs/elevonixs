import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AccountsPage from './pages/AccountsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PartnersPage from './pages/PartnersPage'
import SignupPage from './pages/SignupPage'
import {
  ArticlePage,
  CompanyPage,
  DemosPage,
  IndustriesPage,
  IndustryPage,
  LegalPage,
  ProductPage,
  ProductsPage,
  ResourcesPage,
  SolutionPage,
  SolutionsPage,
} from './pages/SitePages'

export default function App() {
  return (
    <BrowserRouter basename="/elevonixs">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="solutions/:slug" element={<SolutionPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:slug" element={<IndustryPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:slug" element={<ArticlePage />} />
          <Route path="demos" element={<DemosPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />
          <Route path="company/:slug" element={<CompanyPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
