import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Heading = styled.h1`

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 11rem;
      color: var(--color-secoundary-900);
      line-height: 13rem;
      font-family: 'Lato', Courier, monospace;

      @media ${devicesMax.md} {
        font-size: 7rem;
      }
      @media ${devicesMax.sm} {
        font-size: 2rem;
        line-height: 3rem;
      }
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 5rem;
      text-transform: capitalize;
      line-height: 4rem;

      @media ${devicesMax.md} {
        font-size: 2.5rem;
      }

      @media ${devicesMax.sm} {
        font-size: 2rem;
        line-height: 3rem;
      }
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 4rem;
      text-align: center;
    `}
  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 2rem;
      text-transform: capitalize;
      text-align: center;
      border: ${(props) => props.border};
    `}
     ${(props) =>
       props.as === 'h5' &&
       css`
         font-size: 1.8rem;
         text-transform: capitalize;
         text-align: center;
       `}
`

export default Heading
