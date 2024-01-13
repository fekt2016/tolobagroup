import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Card = styled.div`
  background-color: ${(props) => props.bagcolor};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.type === 'sec' &&
    css`
      grid-row: 1/3;

      @media ${devicesMax.md} {
        grid-column: 1/-1;
        grid-row: 1/3;
      }
    `}
  ${(props) =>
    props.type === 'sub' &&
    css`
      grid-column: 2/-1;
      grid-row: 2/4;

      @media ${devicesMax.md} {
        grid-column: 1/-1;
        grid-row: 3/5;
      }
    `}
  ${(props) =>
    props.type === 'age' &&
    css`
      grid-column: 2/4;
      grid-row: 5/7;

      @media ${devicesMax.md} {
        grid-column: 1/-1;
        grid-row: 5/7;
      }
    `}

    ${(props) =>
      props.type === 'staff' &&
      css`
        grid-column: 1/2;
        grid-row: 4/6;
        @media ${devicesMax.md} {
          grid-column: 1/-1;
          grid-row: 7/9;
        }
      `}

        @media ${devicesMax.md}{}
`
export default Card
