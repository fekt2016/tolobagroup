import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { IoTelescope } from 'react-icons/io5'
import { FaRocket } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  gap: 20px;
`
const ImgContent = styled.div`
  flex: 1;
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`
const ImgText = styled.div`
  height: 344px;
  /* padding: 0rem 2rem; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const TextContent = styled.div`
  flex: 1;
  /* padding: 1rem; */
`
const IconBox = styled.div`
  height: 344px;

  display: flex;
  gap: 20px;
`
const P = styled.p`
  color: var(--color-red-900);
  margin-bottom: 2rem;
`
const ImgBox = styled.div`
  height: 344px;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
`
const TextContainer = styled.div`
  height: 344px;
  padding: 3rem;

  /* p {
    hyphens: none;
    color: red;
  } */
`

const Card = styled.div`
  background-color: seagreen;
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
function About() {
  return (
    <Section>
      <Container>
        <ImgContent>
          <ImgText>
            <P>Who we are </P>
            <Heading as="h2">
              the toloba <br />
              group of companies
            </Heading>
          </ImgText>
          <ImgBox>
            <Img src="../../../public/energy.jpeg" alt="" />
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
              <IoTelescope />
              <Heading as="h5">Vision</Heading>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                delectus doloremque sequi dolore iste? Ea nulla quia eius sed
                reiciendis?
              </p>
            </Card>
            <Card>
              <FaRocket />
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
