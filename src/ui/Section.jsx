import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Section = styled.section`
  ${(props) =>
    props.type === 'about' &&
    css`
      padding: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media ${devicesMax.md} {
        grid-template-columns: 1fr;
      }
      @media ${devicesMax.sm} {
        padding: 1rem;
      }
    `}
  ${(props) =>
    props.type === 'sector' &&
    css`
      padding: 4rem;

      @media ${devicesMax.md} {
        padding: 1rem;
      }
    `}
  ${(props) =>
    props.type === 'group' &&
    css`
      background-color: var(--color-grey-100);
      padding: 0 2rem;

      @media ${devicesMax.md} {
        padding: 0 1rem;
      }
    `}
  ${(props) =>
    props.type === 'company' &&
    css`
      background-color: var(--color-primary-700);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      width: 100vw;
      padding: 0 2rem;
    `}
  ${(props) =>
    props.type === 'choose' &&
    css`
      background-color: var(--color-grey-100);
      padding: 4rem;
      @media ${devicesMax.md} {
        padding: 2rem;
      }
    `}
  ${(props) =>
    props.type === 'news' &&
    css`
      padding: 2rem;
      @media ${devicesMax.sm} {
        padding: 1;
      }
    `}
  ${(props) =>
    props.type === 'optimists' &&
    css`
      margin: 0;
      background-color: var(--color-grey-300);
      padding: 4rem;
    `}

    ${(props) =>
      props.type === 'team' &&
      css`
        background-color: var(--color-grey-100);
        padding: 2rem;
      `}
      ${(props) =>
        props.type === 'location' &&
        css`
          padding: 0 2rem;
        `}
      ${(props) =>
        props.type === 'blog' &&
        css`
          padding: 3rem;

          @media ${devicesMax.md} {
            padding: 1rem;
          }
        `}
        ${(props) =>
          props.type === 'service' &&
          css`
            padding: 4rem;
            @media ${devicesMax.sm} {
              padding: 1rem;
            }
          `}
          ${(props) => props.type === 'newspage' && css``}

`

export default Section
