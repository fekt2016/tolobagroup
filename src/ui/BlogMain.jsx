import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const BlogMain = styled.main`
  padding: 2rem;
  grid-column: 1/7;
  grid-row: 2/4;
  padding: 4rem;





  ${(props) =>
    props.type === 'all' &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    `}
  @media ${devicesMax.md} {
    grid-column: 1/-1;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

export default BlogMain
