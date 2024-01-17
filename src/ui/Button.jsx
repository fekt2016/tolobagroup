import styled, { css } from 'styled-components'

const Button = styled.button`
  border: none;
  padding: 0.5rem 3rem;
  background-color: var(--color-secoundary-100);
  color: var(--color-primary-900);
  box-shadow: var(--shadow-sm);
  font-size: 1.6rem;
  transition: all 0.3s;

  ${(props) =>
    props.type === 'service' &&
    css`
      margin-bottom: 4rem;
      border-radius: 100px;
    `}

  &:hover {
    transform: translateX(5px);
    background-color: var(--color-secoundary-900);
  }
`

export default Button
