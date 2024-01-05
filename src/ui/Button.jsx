import styled from 'styled-components'

const Button = styled.button`
  border: none;
  padding: 0.5rem 3rem;
  background-color: var(--color-gold-400);
  box-shadow: var(--shadow-sm);
  font-size: 1.6rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
    background-color: var(--color-gold-700);
  }
`

export default Button
