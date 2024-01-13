import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import Button from '../../ui/Button'
import { devicesMax } from '../../styles/BreakPoint'

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media ${devicesMax.sm} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const TextBox = styled.div`
  flex-basis: 70%;

  @media ${devicesMax.sm} {
    margin-bottom: 6rem;
  }
`

function Optimists() {
  return (
    <Section type="optimists">
      <ContentBox>
        <TextBox>
          <Heading as="h5">We are optimists who love to work together</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptatem cumque voluptas suscipit repellendus sapiente error nemo
            maiores!
          </p>
        </TextBox>
        <Button>Talk To Us Now</Button>
      </ContentBox>
    </Section>
  )
}

export default Optimists
