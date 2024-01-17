import styled from 'styled-components'
import Button from '../../ui/Button'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const TextAbout = styled.div`
  flex: 1;
  padding: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 8rem;
    hyphens: none;
  }

  @media ${devicesMax.md} {
    width: 100%;
    padding: 2rem;
  }
  @media ${devicesMax.sm} {
    width: 100%;
    padding: 1rem;
  }
`
const TextHeading = styled.div`
  border: 2px solid var(--color-primary-900);
  padding: 1rem 4rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-md);

  @media ${devicesMax.md} {
    padding: 0.5rem 2rem;
  }
`
const ImageAbout = styled.div`
  flex: 1;
  position: relative;
  border-left: 10px solid var(--color-primary-900);
  border-bottom: 10px solid var(--color-primary-900);
  border-radius: 10px;

  @media ${devicesMax.md} {
    width: 100%;
    height: 500px;
  }
  @media ${devicesMax.sm} {
    width: 100%;
  }
`

const ImgBox = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  height: 20rem;
  overflow: hidden;
  border-radius: 10px;
  width: 200px;
  position: absolute;
  transform: ${(props) => `skewY(${props.skew})`};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transition: all 0.8s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: brightness(50%);

  p {
    opacity: 0;
    visibility: hidden;
    color: var(--color-secoundary-900);
    transition: all 0.8s ease-in;
    text-transform: capitalize;
  }

  &:hover {
    transform: scale(1.5);
    z-index: 5;
    border: 3px solid var(--color-primary-900);
    filter: brightness(100%);
  }
  &:hover p {
    opacity: 1;
    visibility: visible;
  }

  @media ${devicesMax.md} {
    border: 3px solid (var(--color-secoundary-900));
  }
  @media ${devicesMax.sm} {
    border: 3px solid var(--color-secoundary-900);
  }
`
function AboutUs() {
  return (
    <Section type="about">
      <TextAbout>
        <TextHeading>
          <Heading as="h2">Toloba group of companies</Heading>
        </TextHeading>
        <p>
          Established in the year 2022 and duly registered with the Registrar
          Generals Department in 2023, Toloba Group of Companies stands as a
          testament to innovation, commitment, and diversified excellence in
          various sectors. Under the visionary leadership of Mr. Musah Toloba,
          the President, and Founder, the group embodies a holistic approach to
          business, community, and growth.
        </p>
        <Button>More &rarr;</Button>
      </TextAbout>
      <ImageAbout>
        <ImgBox
          skew="20deg"
          top="10%"
          left="5%"
          background="../../../consult.jpeg"
        >
          <p>toloba sports consult Limited</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="-20deg"
          top="10%"
          left="30%"
          background="../../../energy.jpeg"
        >
          <p>Corporate Sport Ghana Limited</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="20deg"
          top="30%"
          left="10%"
          background="../../../travel.jpeg"
        >
          <p>Islamic Center for Guidance Limited</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="-20deg"
          top="30%"
          left="35%"
          background="../../../unsplash.jpg"
        >
          <p>Toloba Recruitment Agency Limited</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="20deg"
          top="40%"
          left="15%"
          background="../../../tolo2.jpeg"
        >
          <p>Toloba Energy</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="-15deg"
          top="40%"
          left="40%"
          background="../../../pc8.jpg"
        >
          <p>Ghana Private Refeeeres Training</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="20deg"
          top="50%"
          left="20%"
          background="../../../tolo2.jpeg"
        >
          <p>Musah Toloba Ventures</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="-20deg"
          top="50%"
          left="45%"
          background="../../../public/tolo97.jpeg"
        >
          <p>Eventful Travel & Tour Limited</p>
          <p>where sports is big</p>
        </ImgBox>
      </ImageAbout>
    </Section>
  )
}

export default AboutUs
