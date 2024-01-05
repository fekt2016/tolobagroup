import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import { Link } from 'react-router-dom'

const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
const ImgBox = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 200px;
`
const TextBox = styled.div`
  padding: 4rem 2rem;
`
const List = styled.div`
  flex: 1;
  box-shadow: var(--shadow-lg);
`
const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--color-link);
`
const P = styled.p`
  padding: 2rem 0;
`

function News() {
  return (
    <Section type="news">
      <Header>
        <Heading as="h4">news and blogs</Heading>
        <p>UPDATES</p>
      </Header>
      <ContentBox>
        <List>
          <ImgBox background="../../../tolo22.jpeg"></ImgBox>
          <TextBox>
            <StyledLink>
              <Heading as="h5">Hijab Project football tournament</Heading>
            </StyledLink>
            <P>
              Toloba Group Consult donate to participating schools of Hijab
              Project football tournament
            </P>
          </TextBox>
        </List>
        <List>
          <ImgBox background="../../../tolo55.jpeg"></ImgBox>
          <TextBox>
            <StyledLink>
              <Heading as="h5">Toloba Sports Consult collaborates</Heading>
            </StyledLink>
            <P>
              Toloba Sports Consult collaborates with Sports Minister for talent
              development
            </P>
          </TextBox>
        </List>
        <List>
          <ImgBox background="../../../tolo88.jpeg"></ImgBox>
          <TextBox>
            <StyledLink>
              <Heading as="h5">Ghanaian Entrepreneur Musah Toloba</Heading>
            </StyledLink>
            <P>
              Ghanaian Entrepreneur Musah Toloba recognized for sports
              initiatives, receives collaboration offer from Turcaf President
            </P>
          </TextBox>
        </List>
      </ContentBox>
    </Section>
  )
}

export default News
