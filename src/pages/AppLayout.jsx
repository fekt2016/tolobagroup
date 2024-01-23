import { Outlet } from 'react-router-dom'
import Navbar from '../Features/homePage/Navbar'
import styled from 'styled-components'
import Footer from '../Features/homePage/Footer'

const StyledLayout = styled.div`
  width: 100vw;
  position: relative;
`

function AppLayout() {
  return (
    <StyledLayout>
      <Navbar />
      <Outlet />
      <Footer />
    </StyledLayout>
  )
}

export default AppLayout
