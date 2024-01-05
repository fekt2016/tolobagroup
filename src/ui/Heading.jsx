import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 11rem;
      color: var(--color-white);
      line-height: 13rem;

      @media ${devicesMax.md} {
        font-size: 7rem;
      }
      @media ${devicesMax.sm} {
        font-size: 4rem;
        line-height: 8rem;
      }
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 5rem;
      text-transform: capitalize;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 4rem;
    `}
  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 3rem;
      text-transform: capitalize;
    `}
     ${(props) =>
       props.as === 'h5' &&
       css`
         font-size: 1.8rem;
         text-transform: capitalize;
       `}
`

export default Heading
