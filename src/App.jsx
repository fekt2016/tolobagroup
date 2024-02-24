import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import AboutUsPage from './pages/AboutUsPage'
import Services from './pages/Services'
import Blog from './pages/Blog'
import NewsPage from './pages/NewsPage'
import Consult from './pages/Consult'
import Energy from './pages/Energy'
import Corperate from './pages/Corperate'
import Travel from './pages/Travel'
import Ngo from './pages/Ngo'
import Recruitment from './pages/Recruitment'
import Referee from './pages/Referee'
import Mtolo from './pages/Mtolo'
import BlogNews from './Features/Blog/BlogNews'
import ProtectedRoute from './ui/ProtectedRoute'
import LoginForm from './Features/Auth/LoginForm'
import Admin from './pages/Admin'
import { Toaster } from 'react-hot-toast'
import PageNotFound from './pages/PageNotFound'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="service" element={<Services />} />
            <Route path="blog-news" element={<Blog />}>
              <Route index element={<BlogNews />} />
              <Route path="/blog-news/newspage/:id" element={<NewsPage />} />
            </Route>
            <Route path="sport-consult" element={<Consult />} />
            <Route path="toloba-energy" element={<Energy />} />
            <Route path="corperate-sport" element={<Corperate />} />
            <Route path="travel-tour" element={<Travel />} />
            <Route path="islamic-center" element={<Ngo />} />
            <Route path="recruitment" element={<Recruitment />} />
            <Route path="referees" element={<Referee />} />
            <Route path="mtolo" element={<Mtolo />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            >
              <Route path="admin" element={<Admin />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default App
