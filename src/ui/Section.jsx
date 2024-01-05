import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Section = styled.section`
  margin: 4rem;



  ${(props) =>
    props.type === 'about' &&
    css`
      display: flex;
      justify-content: center;

      align-items: center;
      @media ${devicesMax.md} {
        flex-direction: column;
      }
      @media ${devicesMax.md} {
        padding: 2rem;
      }
    `}
  ${(props) => props.type === 'sector' && css``}
  ${(props) =>
    props.type === 'group' &&
    css`
      background-color: var(--color-grey-100);
    `}
  ${(props) =>
    props.type === 'company' &&
    css`
      background-color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
    `}
  ${(props) =>
    props.type === 'choose' &&
    css`
      background-color: var(--color-grey-100);
    `}
  ${(props) => props.type === 'news' && css``}

`

export default Section
