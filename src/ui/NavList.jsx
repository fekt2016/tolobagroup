/* eslint react/prop-types: 0 */
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

const contact = keyframes`
  0%{transform: scale(1.2)}
  100%{transform: scale(0)}
`
const spin = keyframes`
0%{transform: rotate(0)}
  100%{transform: rotate(360deg)}
`

const StyledList = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  padding: 2rem;

  color: ${(props) =>
    props.type === 'mini'
      ? 'var(--color-secoundary-900)'
      : 'var(--color-primary-900)'};

  align-items: center;

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
  position: relative;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
    border: 1px solid var(--color-secoundary-900);
  }
`

const StyledContactLink = styled(NavLink)`
  color: var(--color-primary-900);
  text-decoration: none;
  text-transform: capitalize;
`
const StyledContact = styled.li`
  background-color: var(--color-secoundary-700);
  color: var(--color-primary-900);
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  position: relative;
  transition: scale 0.5s;
  box-shadow: var(--shadow-xl);
  &:hover {
    background-color: var(--color-secoundary-900);
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--color-secoundary-700);
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
`

const DropDown = styled.div`
  width: 250px;
  background-color: var(--color-white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  z-index: 12;
`
const DropLink = styled(Link)`
  padding: 0.8rem;
  text-transform: capitalize;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.4s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: var(--color-secoundary-900);
    transition: all 0.4s;
  }
  &:hover:before {
    width: 100%;
  }
`

const StyledIconUp = styled(HiChevronUp)`
  margin-left: 1rem;
  font-size: 2rem;
`
const StyledIconDown = styled(HiChevronDown)`
  margin-left: 1rem;
  font-size: 2rem;
`
function NavList({ type }) {
  const [drop, setDrop] = useState(false)

  return (
    <StyledList type={type}>
      <StyledLi>
        <StyledLink to="/">home</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="service">our service </StyledLink>
      </StyledLi>
      <StyledLi onClick={() => setDrop(!drop)}>
        <StyledLink>
          sub groups {drop ? <StyledIconUp /> : <StyledIconDown />}
        </StyledLink>
        {drop && (
          <DropDown>
            <DropLink to="sport-consult">toloba sports Consult Ltd</DropLink>
            <DropLink to="corperate-sport">corporate sport ghana Ltd</DropLink>
            <DropLink to="islamic-center">
              islamic center for guidance ltd
            </DropLink>
            <DropLink to="recruitment">toloba recruitment agency ltd</DropLink>
            <DropLink to="energy">toloba energy ltd</DropLink>
            <DropLink to="referees">ghana private refeeres training</DropLink>
            <DropLink to="sport-consult">Mtolo ventures</DropLink>
            <DropLink to="travel-tour">eventful travel & tour ltd</DropLink>
          </DropDown>
        )}
      </StyledLi>
      <StyledLi>
        <StyledLink to="aboutus">about us </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="blog-news">blog & news</StyledLink>
      </StyledLi>
      <StyledContact>
        <StyledContactLink to="contact">contact us</StyledContactLink>
      </StyledContact>
    </StyledList>
  )
}

export default NavList
