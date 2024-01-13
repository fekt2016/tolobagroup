import styled from 'styled-components'
import Section from '../../ui/Section'

const Box = styled.div`
  padding: 4rem;
`
const StyledSpan = styled.span`
  font-size: 8rem;
  color: var(--color-secoundary-900);
`
const P = styled.p`
  font-size: 4rem;
  color: var(--color-secoundary-900);
`
function Company() {
  return (
    <Section type="company">
      <Box>
        <StyledSpan>20 +</StyledSpan>
        <P>Companies in Ghana,Germany, Turkey, Dubai and Malasiya</P>
      </Box>
    </Section>
  )
}

export default Company
