import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  padding: 2rem;
`
const Card = styled.div`
  width: 28rem;
  padding: 1rem;
  background-color: var(--color-white);
`
const ImgBox = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`
const Img = styled.img`
  width: 100%;
`
const TextBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const P = styled.p`
  text-align: center;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--color-red-900);
    text-transform: capitalize;
  }
`
function Team() {
  return (
    <Section type="team">
      <Header>
        <p>our Minds</p>
        <Heading as="h3">Meet Our Team</Heading>
      </Header>

      <Container>
        <Card>
          <ImgBox>
            <Img src="../../../public/pc3.jpg" alt="img" />
          </ImgBox>

          <TextBox>
            <Heading as="h5">Dr. Joseph Siaw Agyepong</Heading>
            <P>CHAIRMAN | FOUNDER</P>
            <P>&#x201C;Our country is our identity, keep it clean&#x201D;</P>
          </TextBox>
        </Card>
        <Card>
          <ImgBox>
            <Img src="../../../public/pc3.jpg" alt="img" />
          </ImgBox>

          <TextBox>
            <Heading as="h5">Dr. Joseph Siaw Agyepong</Heading>
            <P>CHAIRMAN | FOUNDER</P>
            <P>&#x201C;Our country is our identity, keep it clean&#x201D;</P>
          </TextBox>
        </Card>
        <Card>
          <ImgBox>
            <Img src="../../../public/pc3.jpg" alt="img" />
          </ImgBox>

          <TextBox>
            <Heading as="h5">Dr. Joseph Siaw Agyepong</Heading>
            <P>CHAIRMAN | FOUNDER</P>
            <P>&#x201C;Our country is our identity, keep it clean&#x201D;</P>
          </TextBox>
        </Card>
      </Container>
    </Section>
  )
}

export default Team
