import styled, { css } from 'styled-components'
import Heading from './Heading'
import Section from './Section'
import {
  GiRelationshipBounds,
  GiCubeforce,
  GiUnstableProjectile,
} from 'react-icons/gi'
import { GrResources } from 'react-icons/gr'
import { SiExpertsexchange } from 'react-icons/si'
import { MdOutlineDiversity2 } from 'react-icons/md'
import { devicesMax } from '../styles/BreakPoint'

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

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.md} {
    grid-template-columns: repeat(1, 1fr);
  }
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
const StyledIcon = css`
  font-size: 5rem;
  margin-bottom: 3rem;
  color: var(--color-secoundary-900);
`

const IconRelate = styled(GiRelationshipBounds)`
  ${StyledIcon}
`
const IconResources = styled(GrResources)`
  ${StyledIcon}
`
const IconExp = styled(SiExpertsexchange)`
  ${StyledIcon}
`
const IconForce = styled(GiCubeforce)`
  ${StyledIcon}
`
const IconStable = styled(GiUnstableProjectile)`
  ${StyledIcon}
`
const IconNature = styled(MdOutlineDiversity2)`
  ${StyledIcon}
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
          <IconNature />
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
          <IconForce />
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
          <IconStable />
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
          <IconResources />
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
          <IconRelate />
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
          <IconExp />
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
