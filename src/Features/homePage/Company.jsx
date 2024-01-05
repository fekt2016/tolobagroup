import styled from 'styled-components'
import Section from '../../ui/Section'
const StyledSpan = styled.span`
  font-size: 8rem;
  color: var(--color-gold-900);
`
const P = styled.p`
  font-size: 4rem;
  color: var(--color-gold-900);
`
function Company() {
  return (
    <Section type="company">
      <StyledSpan>20 +</StyledSpan>
      <P>Companies in Ghana,Germany, Turkey, Dubai and Malasiya</P>
    </Section>
  )
}

export default Company
