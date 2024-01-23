import styled, { css } from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { IoTelescope } from 'react-icons/io5'
import { FaRocket } from 'react-icons/fa'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  padding: 1rem;
  display: flex;
  gap: 20px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const ImgContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ImgText = styled.div`
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContent = styled.div`
  flex: 1;
`
const IconBox = styled.div`
  padding: 2rem;

  display: flex;
  gap: 20px;

  @media ${devicesMax.sm} {
    flex-direction: column;
  }
`
const P = styled.p`
  color: var(--color-red-900);
  margin-bottom: 2rem;
`
const ImgBox = styled.div`
  height: 344px;
  /* flex: 1; */
`
const Img = styled.img`
  height: 100%;
  width: 100%;
`
const TextContainer = styled.div`
  /* height: 344px; */
  padding: 3rem;

  p {
    hyphens: none;
  }
`

const Card = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-secoundary-100);
  box-shadow: var(--shadow-md);
`
const StyledIcon = css`
  font-size: 5rem;
  color: var(--color-primary-900);
  margin-bottom: 2rem;
`
const IconScope = styled(IoTelescope)`
  ${StyledIcon}
`
const IconRock = styled(FaRocket)`
  ${StyledIcon}
`
function About() {
  return (
    <Section type="about">
      <Container>
        <ImgContent>
          <ImgText>
            <P>-Who we are </P>
            <Heading as="h2">
              the toloba <br />
              group of companies
            </Heading>
          </ImgText>
          <ImgBox>
            <Img src="../../../energy.jpeg" alt="" />
          </ImgBox>
        </ImgContent>
        <TextContent>
          <TextContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              ipsa sint. Quis molestias error deleniti eligendi quisquam
              temporibus accusamus quo voluptatum ex iure ipsam reiciendis,
              dolore deserunt illo? Facere deserunt esse nisi consequatur
              quibusdam adipisci. Velit ipsa ad nisi maxime eaque, maiores
              magnam eligendi ratione dignissimos facilis veritatis sapiente
              quas. Expedita esse cum error debitis facere laboriosam iure eos
              tenetur inventore magnam exercitationem, ab excepturi pariatur
              accusantium tempora eveniet voluptate ratione ea dolore fugit
              adipisci distinctio ipsam nisi aspernatur? Rerum, ducimus aliquid?
              Magnam similique velit voluptatum deserunt iusto perferendis odio
              quia debitis officia ipsa. Cumque nihil ipsa et eligendi neque
              aperiam repudiandae, fuga minima sapiente. In commodi obcaecati ex
              est dicta eos corrupti tempora, eius velit dolor quos. In
              molestiae, alias iusto sit reiciendis nam reprehenderit
              consequuntur quasi deserunt quam qui quidem ipsa molestias?
              Dolorem tempora similique ratione reiciendis totam voluptates
              praesentium voluptatum autem.
            </p>
          </TextContainer>
          <IconBox>
            <Card>
              <IconScope />
              <Heading as="h5">Vision</Heading>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                delectus doloremque sequi dolore iste? Ea nulla quia eius sed
                reiciendis?
              </p>
            </Card>
            <Card>
              <IconRock />
              <Heading as="h5">Mission</Heading>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                delectus doloremque sequi dolore iste? Ea nulla quia eius sed
                reiciendis?
              </p>
            </Card>
          </IconBox>
        </TextContent>
      </Container>
    </Section>
  )
}

export default About
