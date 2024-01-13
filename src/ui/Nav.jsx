import styled, { css } from 'styled-components'
import NavList from './NavList'
import { devicesMax } from '../styles/BreakPoint'

const StyledNav = styled.nav`
  height: 100%;
${(props) => props.type === 'mini' && css``}
  @media ${devicesMax.md} {
    display: none;
  }

`
function Nav() {
  return (
    <StyledNav>
      <NavList />
    </StyledNav>
  )
}

export default Nav
