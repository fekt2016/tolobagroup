/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import { Link } from 'react-router-dom'

const StyledTopNews = styled.div`
  height: 30rem;
  padding: 2rem;
  grid-column: 1/7;
  grid-row: 1/2;

  display: flex;
  gap: 10px;
  /* background-color: aliceblue; */

  @media ${devicesMax.md} {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
  @media ${devicesMax.sm} {
    flex-direction: column;
  }
`

const BigCard = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: end;

  @media ${devicesMax.lg} {
    flex: 1;
  }
`
const StyledSpan = styled.span`
  color: var(--color-white);
  padding: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 3rem;
  cursor: pointer;
`
const SmallCard = styled.div`
  flex: 1;
  background-image: url('../../consult.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
function TopNews({ image, link, heading }) {
  return (
    <StyledTopNews>
      <BigCard image={image}>
        <Link to={`/blog-news/newspage/${link}`}>
          <StyledSpan>{heading}</StyledSpan>
        </Link>
      </BigCard>
      <SmallCard />
    </StyledTopNews>
  )
}

export default TopNews
