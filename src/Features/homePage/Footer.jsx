import styled, { css } from 'styled-components'
import Heading from '../../ui/Heading'
import { FaFacebook, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'
import { devicesMax } from '../../styles/BreakPoint'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'

const StyledFooter = styled.footer`
  background-color: var(--color-primary-900);
  padding: 2rem;
`

const ContentBox = styled.div`
  padding: 2rem;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr repeat(3, 2fr);

  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`
const List = styled.div`
  color: var(--color-secoundary-900);
  font-size: 1.6rem;
  text-transform: capitalize;

  display: flex;
  flex-direction: column;
  align-items: start;

  ul {
    color: var(--color-white);

    li {
      margin-bottom: 1rem;
    }
  }

  ${(props) =>
    props.type === 'news' &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`

const StyledMedia = styled.div`
  margin: 0 6rem;
  padding: 6rem 0;
  border-top: 2px solid var(--color-white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devicesMax.sm} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const StyledIconContainer = styled.div``
const TextBox = styled.div`
  align-self: flex-end;
  color: var(--color-white);

  p {
    font-size: 1.2rem;
  }
  @media ${devicesMax.sm} {
    align-self: center;
  }
`

const StyledIcon = css`
  margin-right: 2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.4s;
`
const Facebook = styled(FaFacebook)`
  ${StyledIcon}
  color:var(--color-facebook-500);

  &:hover {
    color: var(--color-facebook-900);
    transform: scale(1.5);
  }
`
const Twitter = styled(FaTwitter)`
  ${StyledIcon}
  color:var(--color-twitter-500);

  &:hover {
    color: var(--color-twitter-900);
    transform: scale(1.5);
  }
`
const Tiktok = styled(FaTiktok)`
  ${StyledIcon}
  color:var(--color-tiktok-500);

  &:hover {
    color: var(--color-tiktok-900);
    transform: scale(1.5);
  }
`
const Youtube = styled(FaYoutube)`
  ${StyledIcon}
  color:var(--color-youtube-500);
  &:hover {
    color: var(--color-youtube-900);
    transform: scale(1.5);
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-auto-flow: 20px;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
`
const Header = styled.div`
  font-size: 2.5rem !important;
  margin-bottom: 2rem;
`
function Footer() {
  return (
    <StyledFooter>
      <ContentBox>
        <List>
          <Header>
            <Heading as="h5">Quick Links</Heading>
          </Header>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/service">Our service</Link>
            </li>
            <li>
              <Link to="/aboutus">about Us</Link>
            </li>
            <li>
              <Link to="/blog-news">Blog & news</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </List>
        <List>
          <Header>
            <Heading as="h5">Location</Heading>
          </Header>
          <ul>
            <li>Ablempeke Opposite Marwako fast Food. Ablempeke, Accra</li>

            <li>+233 (0) 241804225</li>
            <li>info@tolobagroup.com</li>
          </ul>
        </List>
        <List>
          <Header>
            <Heading as="h5">Groups</Heading>
          </Header>
          <ul>
            <li>toloba Sport Consult Ltd</li>
            <li>Corporate Sport Ghana Ltd</li>
            <li>Islamic Center For Giudance Ltd </li>
            <li>toloba Recruitment Agency Ltd</li>
            <li>Toloba Energy</li>
            <li>Ghana Pivate Refeeres Training </li>
            <li>Mtolo Ventures </li>
            <li>EventFul Travel & Tour ltd </li>
          </ul>
        </List>

        <List type="news">
          <Header>
            <Heading as="h5">NewsLetter</Heading>
          </Header>
          <p>
            Sign up our newsletter to get update news and article about company.
          </p>
          <StyledForm>
            <Input type="text" placeholder="Newsletter" />
            <Button>Submit</Button>
          </StyledForm>
        </List>
      </ContentBox>
      <StyledMedia>
        <StyledIconContainer>
          <Facebook />
          <Twitter />
          <Tiktok />
          <Youtube />
        </StyledIconContainer>
        <TextBox>
          <Link to="/login">Copyright © 2023. All rights reserved.</Link>
        </TextBox>
      </StyledMedia>
    </StyledFooter>
  )
}

export default Footer
