/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const StyledPro = styled.div`
  padding: 12rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const ImgBox = styled.div`
  height: 50rem;
  background-image: ${(props) => `url(${props.background})`};
  border-radius: 10px;
  flex-basis: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${devicesMax.md} {
  }
`
const Img = styled.img`
  width: 85%;
  height: 100%;
  margin-left: 20rem;
  margin-top: 10rem;
  border-radius: 10px;

  @media ${devicesMax.md} {
    margin-left: 15rem;
    margin-top: 20rem;
  }
`
const TextBox = styled.div`
  flex-basis: 50%;
`

const LogoBox = styled.div`
  margin-bottom: 4rem;
`
const HeadingBox = styled.div`
  margin-bottom: 4rem;
`
const TextContent = styled.div``

function Profile({ msg, src, logo, heading, background }) {
  return (
    <StyledPro>
      <ImgBox background={background}>
        <Img src={src} alt="image" />
      </ImgBox>
      <TextBox>
        <LogoBox>{logo}</LogoBox>
        <HeadingBox>{heading}</HeadingBox>
        <TextContent>{msg}</TextContent>
      </TextBox>
    </StyledPro>
  )
}

export default Profile
