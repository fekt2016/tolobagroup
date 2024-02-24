import styled, { css } from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import BlogMain from '../../ui/BlogMain'
import { Link } from 'react-router-dom'
import { useBlog } from '../admin/useBlog'

const Card = styled.div`
  flex: 1;
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-lg);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`
const ImgBox = styled.div`
  width: 100%;
  height: 60%;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const TextBox = styled.div`
  height: 40%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-200);
  color: var(--color-primary-700);

  p {
    text-decoration: underline;
  }
  @media ${devicesMax.md} {
    padding: 0.5rem;
  }
`
const StyledLink = styled(Link)`
  cursor: pointer;
`
const StyledSector = styled.span`
  padding: 0.2rem 1.5rem;
  font-size: 1.2rem;
  align-self: start;
  margin-bottom: 1rem;

  ${(props) =>
    props.type === `sport` &&
    css`
      background-color: green;
    `}
`
const StyledDate = styled.p`
  font-size: 0.8rem;
`
const StyledMsg = styled.p`
  font-size: 1rem;

  text-decoration: none !important;
`

function BlogNews() {
  const { data: dataList, isLoading } = useBlog()

  if (isLoading) return <p>loading...</p>
  console.log(dataList)
  return (
    <BlogMain type="all">
      {dataList.map((item) => (
        <Card key={item.heading}>
          <StyledLink to={`/blog-news/newspage/${item.link}`}>
            <ImgBox>
              <Img src={item.image} alt={item.heading} />
            </ImgBox>
            <TextBox>
              <StyledDate>
                {new Date(item.created_at).toDateString()}
              </StyledDate>
              <StyledSector type={item.category}>{item.category}</StyledSector>

              <p>{item.heading}</p>

              <StyledMsg>{item.short}</StyledMsg>
            </TextBox>
          </StyledLink>
        </Card>
      ))}
    </BlogMain>
  )
}

export default BlogNews
