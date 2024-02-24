import styled, { css } from 'styled-components'

const Form = styled.form`
  overflow: hidden;
  font-size: 1.4rem;
  margin: 0 auto;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  ${(props) =>
    props.type === 'regular' &&
    css`
      width: 70%;
      padding: 2.4rem 4rem;
    `}

  ${(props) =>
    props.type === 'login' &&
    css`
      padding: 2.4rem 4rem;
    `}
`
Form.defaultProps = {
  type: 'regular',
}
export default Form
