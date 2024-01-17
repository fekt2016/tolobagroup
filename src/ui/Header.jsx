/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import Heading from './Heading'

const StyledHeader = styled.header`
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10rem;
  color: var(--color-white);

  background-image: ${(props) => `url(${props.src})`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`
const Img = styled.img`
  height: 400px;
`
const P = styled.p`
  font-size: 1.6rem;
  margin: 2rem;
`
function Header({ src, name, msg }) {
  return (
    <StyledHeader src={src} name={name} msg={msg}>
      <Heading as="h2">{name}</Heading>
      <P>{msg}</P>
      {name === 'Ghana corporate sports' ? (
        <Img src="../../public/corp.png" />
      ) : (
        ''
      )}
    </StyledHeader>
  )
}

export default Header
