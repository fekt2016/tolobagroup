import { Outlet } from 'react-router-dom'
import Navbar from '../Features/homePage/Navbar'
import Header from '../Features/homePage/Header'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 100vw;
  position: relative;
`

function AppLayout() {
  return (
    <StyledLayout>
      <Navbar />
      <Header />
      <Outlet />
    </StyledLayout>
  )
}

export default AppLayout
