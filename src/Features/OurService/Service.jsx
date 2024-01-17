import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 8rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 150px;
`
const StyledLink = styled(Link)`
  background-color: var(--color-white);
  border-radius: 100px;
  padding: 0.5rem 3rem;
  margin: 2rem;
`

const Card = styled.div`
  height: 25rem;

  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  background-image: linear-gradient(
    to right,
    rgba(44, 51, 67, 0.8),
    rgb(233, 72, 93, 0.8)
  );

  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`
function Service() {
  return (
    <Section type="service">
      <Heading as="h4">sectors we operate</Heading>
      <Container>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/sport-consult" type="service">
            Toloba sports consult
          </StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/corperate-sport">
            Corporate Sport Ghana Ltd
          </StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/islamic-center">
            Islamic Center for Guidance Ltd
          </StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/recruitment">
            Toloba Recruitment Agency Ltd
          </StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/toloba-energy">Toloba Energy Ltd</StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/referees">
            Ghana Private Refeeres Training
          </StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/mtolo">Musah toloba ventures</StyledLink>
        </Card>
        <Card background="../../../tolo97.jpeg">
          <StyledLink to="/travel-tour">EventFul travel & Tour Ltd</StyledLink>
        </Card>
      </Container>
    </Section>
  )
}

export default Service
