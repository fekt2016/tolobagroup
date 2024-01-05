import styled from 'styled-components'
import Button from '../../ui/Button'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const TextAbout = styled.div`
  flex: 1;
  padding: 4rem 6rem;
  text-align: center;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 4rem 0rem;
    margin-bottom: 8rem;
  }
`
const TextHeading = styled.div`
  border: 2px solid var(--color-gold-900);
  /* padding: 1rem 2rem; */
  margin-bottom: 2rem;
`
const ImageAbout = styled.div`
  min-height: 428.5px;
  flex: 1;
  position: relative;
  margin: 0 auto;

  @media ${devicesMax.md} {
    width: 100%;
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
    color: var(--color-gold-900);
    transition: all 0.8s ease-in;
  }

  &:hover {
    transform: scale(1.5);
    z-index: 5;
    border: 3px solid var(--color-gold-600);
    filter: brightness(100%);
  }
  &:hover p {
    opacity: 1;
    visibility: visible;
  }

  @media ${devicesMax.md} {
    height: 150px;
    width: 150px;
    top: ${(props) => props.topMd};
    left: ${(props) => props.leftMd};
    border: 3px solid var(--color-gold-600);
  }
  @media ${devicesMax.sm} {
    height: 150px;
    width: 150px;
    left: ${(props) => props.leftSm};
    border: 3px solid var(--color-gold-600);
  }
`
function AboutUs() {
  return (
    <Section type="about">
      <TextAbout>
        <TextHeading>
          <Heading as="h3">Toloba group of companies</Heading>
        </TextHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae
          maxime praesentium totam repellendus! Quam quaerat placeat veritatis
          autem! Perspiciatis molestias pariatur, ullam ipsum accusantium neque
          corrupti cumque asperiores vitae architecto soluta, qui sit tempore
          tempora non eum iste explicabo at deleniti quia nemo, porro quidem
          voluptatum cum? Similique, magni. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tempore quae maxime praesentium totam
          repellendus! Quam quaerat placeat veritatis autem! Perspiciatis
          molestias pariatur, ullam ipsum accusantium neque corrupti cumque
          asperiores vitae architecto soluta, qui sit tempore tempora non eum
          iste explicabo at deleniti quia nemo, porro quidem voluptatum cum?
          Similique, magni.
        </p>
        <Button>More &rarr;</Button>
      </TextAbout>
      <ImageAbout>
        <ImgBox
          skew="20deg"
          top="-100px"
          topMd="50px"
          left="50px"
          leftMd="200px"
          leftSm="80px"
          background="../../../consult.jpeg"
        >
          <p>toloba sports consults</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="-20deg"
          top="-100px"
          topMd="50px"
          left="250px"
          leftMd="350px"
          leftSm="230px"
          background="../../../energy.jpeg"
        >
          <p>toloba sports consults</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="20deg"
          top="170px"
          topMd="250px"
          left="250px"
          leftMd="350px"
          leftSm="230px"
          background="../../../travel.jpeg"
        >
          <p>toloba sports consults</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          skew="-20deg"
          top="170px"
          topMd="250px"
          left="50px"
          leftMd="200px"
          leftSm="80px"
          background="../../../unsplash.jpg"
        >
          <p>toloba sports consults</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          top="50px"
          topMd="150px"
          left="0rem"
          leftMd="100px"
          leftSm="20px"
          background="../../../tolo2.jpeg"
        >
          <p>toloba sports consults</p>
          <p>where sports is big</p>
        </ImgBox>
        <ImgBox
          top="50px"
          left="300px"
          leftMd="450px"
          topMd="150px"
          leftSm="250px"
          background="../../../tolo3.jpeg"
        >
          <p>toloba sports consults</p>
          <p>where sports is big</p>
        </ImgBox>
      </ImageAbout>
    </Section>
  )
}

export default AboutUs
