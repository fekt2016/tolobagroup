/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import Heading from './Heading'

const StyledHeader = styled.header`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
function Header({ src, name }) {
  return (
    <StyledHeader src={src} name={name}>
      <Heading as="h2">{name}</Heading>
      {name === 'Ghana corporate sports' ? (
        <Img src="../../public/corp.png" />
      ) : (
        ''
      )}
    </StyledHeader>
  )
}

export default Header
