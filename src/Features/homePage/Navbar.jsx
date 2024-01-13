import { useState } from 'react'
import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint.js'
import { HiMiniXMark, HiOutlineBars3BottomRight } from 'react-icons/hi2'
import NavList from '../../ui/NavList.jsx'
import Nav from '../../ui/Nav.jsx'

const NavWrapper = styled.div`
  height: 7rem;
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background-color: transparent;

  ${(props) =>
    props.nav ? 'background-color:var(--color-secoundary-900)' : ''};
`
const Img = styled.img`
  height: 5rem;
`
const ImgBox = styled.div``

const IconCross = styled(HiOutlineBars3BottomRight)`
  font-size: 3rem;
  color: var(--color-primary-900);
  display: none;
  @media ${devicesMax.md} {
    display: block;
  }
`
const IconMenu = styled(HiMiniXMark)`
  font-size: 3rem;
  color: var(--color-primary-900);
  display: none;
  @media ${devicesMax.md} {
    display: block;
  }
`
const StyledMinNav = styled.nav`
  position: absolute;
  top: 7rem;
  left: 0;
  width: 100vw;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  height: 30rem;
  transition: all 0.5s;
  background-color: var(--color-primary-900);
  z-index: 10;
`
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const [show, setShow] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 525) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <NavWrapper nav={navbar}>
      <ImgBox>
        <Img src="../../../edo.png" alt="logo" />
      </ImgBox>
      <Nav />
      {!show ? (
        <IconCross onClick={() => setShow(true)} />
      ) : (
        <IconMenu onClick={() => setShow(false)} />
      )}
      {show && (
        <StyledMinNav show={show}>
          <NavList type="mini" />
        </StyledMinNav>
      )}
    </NavWrapper>
  )
}

export default Navbar
