import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import { Link } from 'react-router-dom'
import { devicesMax } from '../../styles/BreakPoint'
import { useBlog } from '../admin/useBlog'
import Spinner from '../../ui/Spinner'

const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  /* padding: 2rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media ${devicesMax.md} {
    flex-direction: column;
    padding: 1rem;
  }
`
const ImgBox = styled.div`
  height: 20rem;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
`
const TextBox = styled.div`
  padding: 4rem 2rem;
`
const List = styled.div`
  flex: 1;
  box-shadow: var(--shadow-lg);

  @media ${devicesMax.sm} {
    width: 100%;
  }
`
const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--color-link);
`
const P = styled.p`
  padding: 2rem 0;
`

function News() {
  const { isLoading, data: blogs, error } = useBlog()

  if (isLoading) <Spinner />
  if (error) return 'An error has occurred: ' + error.message
  console.log(blogs)

  const currentData = blogs?.slice(0, 3)

  return (
    <>
      <Section type="news">
        <Header>
          <Heading as="h4">news and blogs</Heading>
          <p>UPDATES</p>
        </Header>
        <ContentBox>
          {currentData?.map((data) => (
            <List key={data.heading}>
              <ImgBox background={data.image}></ImgBox>
              <TextBox>
                <StyledLink to={`/blog-news/newspage/${data.link}`}>
                  <Heading as="h5">{data.link}</Heading>
                </StyledLink>
                <P>{data.short}</P>
              </TextBox>
            </List>
          ))}
        </ContentBox>
      </Section>
    </>
  )
}

export default News
