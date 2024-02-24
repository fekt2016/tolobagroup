import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'
import Button from '../../ui/Button'

const StyledGroup = styled.div`
  padding: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 0.5s;
  filter: brightness(100%);

  &:hover {
    background-size: 110%;
    filter: brightness(60%);
  }
`
const ContentBox = styled.div`
  background-color: var(--color-white);

  @media ${devicesMax.sm} {
    width: 100%;
  }
`
const TextBox = styled.div`
  padding: 4rem;
`
const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
  }

  @media ${devicesMax.md} {
    p {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }
`
const P = styled.p`
  text-align: start;
  hyphens: none;
`
const HeadingBox = styled.div`
  width: 100%;
`
function Groups() {
  return (
    <Section type="group">
      <StyledGroup>
        <FirstBox>
          <HeadingBox>
            <Heading as="h4" border="2px solid var(--color-secoundary-900)">
              Sectors of Operation
            </Heading>
          </HeadingBox>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            repellat ipsam facere itaque qui aspernatur inventore nobis
            voluptatem nisi! Quod maxime quia voluptatem rerum?
          </P>
          <Button>Explore All Sectors</Button>
        </FirstBox>
        <ContentBox>
          <ImgBox background="../../../tolo4.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">Islamic Center for Guidance </Heading>
            <P>
              Serving as the charity arm of Toloba Group, the Islamic Center for
              Guidance goes beyond religious perspectives to provide
              humanitarian aid, community development, and support to those in
              need. Committed to fostering a culture of care and compassion, it
              actively engages in philanthropic initiatives for the betterment
              of society.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../tolo3.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">Corporate Sport Ghana Limited </Heading>
            <P>
              A flagship subsidiary specializing in corporate sports management
              and events, fostering a healthy blend of competition and
              camaraderie within the corporate landscape.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../tolo2.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4"> ⁠Toloba Sports Consult Limited </Heading>
            <P>
              A pioneering force in sports consultancy, Toloba Sports Consult is
              dedicated to unearthing and nurturing talents, particularly in
              remote areas, contributing significantly to grassroots sports
              development.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../consult.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">Toloba Recruitment Agency Limited </Heading>
            <P>
              Committed to bridging the gap between talent and opportunity,
              Toloba Recruitment Agency is a premier recruitment firm offering
              strategic staffing solutions across diverse industries.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc3.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">⁠Toloba Energy Limited </Heading>
            <P>
              A forward-thinking entity dedicated to sustainable energy
              solutions, Toloba Energy Limited is at the forefront of driving
              innovation and eco-friendly practices in the energy sector.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc7.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">Ghana Private Referees Training Limited </Heading>
            <P>
              Setting the standard for referee training, this subsidiary is
              instrumental in enhancing the skills and professionalism of
              referees in Ghana&apos;s sporting arena.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc8.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">Mtolo Ventures </Heading>
            <P>
              As a versatile venture within the Toloba Group, Mtolo Ventures
              explores diverse business opportunities, adapting to emerging
              markets and contributing to the economic landscape.
            </P>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc6.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">Eventful Travel and Ticketing Limited </Heading>
            <P>
              A strategic subsidiary focusing on travel and ticketing services,
              Eventful Travel and Ticketing Limited offers seamless solutions
              for a variety of travel needs, providing clients with unparalleled
              experiences and convenience.
            </P>
          </TextBox>
        </ContentBox>
      </StyledGroup>
    </Section>
  )
}

export default Groups
