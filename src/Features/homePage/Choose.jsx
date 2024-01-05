import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import { GiStrikingArrows } from 'react-icons/gi'

const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`
const Box = styled.div`
  background-color: var(--color-white);
  padding: 3rem;
  box-shadow: var(--shadow-md);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    padding: 2rem 4rem;
  }
`

const IconArrow = styled(GiStrikingArrows)`
  font-size: 5rem;
  margin-bottom: 3rem;
`
function Choose() {
  return (
    <Section type="choose">
      <Header>
        <Heading as="h6">OUR STRENGTH</Heading>
        <Heading as="h3">Why Choose Us</Heading>
      </Header>

      <ContentBox>
        <Box>
          <IconArrow />
          <Heading as="h4">Diverse Nature</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eligendi odio laborum molestiae aut ipsum asperiores fuga. Beatae
              illum vel ratione.
            </p>
          </div>
        </Box>
        <Box>
          <IconArrow />
          <Heading as="h4">Solid Work Force</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eligendi odio laborum molestiae aut ipsum asperiores fuga. Beatae
              illum vel ratione.
            </p>
          </div>
        </Box>
        <Box>
          <IconArrow />
          <Heading as="h4">Stable Economy</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eligendi odio laborum molestiae aut ipsum asperiores fuga. Beatae
              illum vel ratione.
            </p>
          </div>
        </Box>
        <Box>
          <IconArrow />
          <Heading as="h4">Well Resourced</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eligendi odio laborum molestiae aut ipsum asperiores fuga. Beatae
              illum vel ratione.
            </p>
          </div>
        </Box>
        <Box>
          <IconArrow />
          <Heading as="h4">Strong Relationship</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eligendi odio laborum molestiae aut ipsum asperiores fuga. Beatae
              illum vel ratione.
            </p>
          </div>
        </Box>
        <Box>
          <IconArrow />
          <Heading as="h4">Experience</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eligendi odio laborum molestiae aut ipsum asperiores fuga. Beatae
              illum vel ratione.
            </p>
          </div>
        </Box>
      </ContentBox>
    </Section>
  )
}

export default Choose
