/* eslint react/prop-types: 0 */
import { NavLink } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

const contact = keyframes`
  0%{transform: scale(1.2)}
  100%{transform: scale(0)}
`
const spin = keyframes`
0%{transform: rotate(0)}
  100%{transform: rotate(360deg)}
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;

  align-items: center;
  ${(props) =>
    props.type === 'row' &&
    css`
      flex: 2;
    `}
  ${(props) =>
    props.type === 'mini' &&
    css`
      flex-direction: column;
      width: 100%;
      height: 100%;
    `}
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--color-white);
`

const StyledContactLink = styled(NavLink)`
  color: var(--color-gold-900);
  text-decoration: none;
  text-transform: capitalize;
`
const StyledContact = styled.li`
  background-color: var(--color-white);
  color: #000000;
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  position: relative;
  transition: scale 0.5s;
  box-shadow: var(--shadow-xl);
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
    padding: 1rem 1.5rem;
    border-radius: 100px;
    z-index: -1;
  }
  &:hover:before {
    animation: ${contact} 1s ease;
  }
`
const StyledLi = styled.li`
  padding: 0.5rem 1rem;
  transition: all 1s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border-radius: 100px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 100px;
  }
  &:hover:before {
    animation: ${spin} 1s ease;
    border: 1px solid var(--color-white);
  }
`

function NavList({ type }) {
  return (
    <StyledList type={type}>
      <StyledLi>
        <StyledLink>home</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink>our service </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink>about us </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink>blog</StyledLink>
      </StyledLi>
      <StyledContact>
        <StyledContactLink>contact us</StyledContactLink>
      </StyledContact>
    </StyledList>
  )
}

export default NavList
