import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
