import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Card = styled.div`
  flex: 1;
`
const Img = styled.img``
const ImgBox = styled.div`
  width: 100%;
  /* height: 100px; */
  background-color: red;
`
function Operation() {
  return (
    <Section type="operation">
      <Heading as="h4">Countries of operations </Heading>
      <Container>
        <Card>
          <ImgBox>
            <Img src="../../../public/pc6.jpg" />
          </ImgBox>
          <p>Germany</p>
        </Card>
        <Card>
          <div></div>
          <p>Turkey</p>
        </Card>
        <Card>
          <div></div>
          <p>malasiaya</p>
        </Card>
        <div>
          <div></div>
          <p>singapore</p>
        </div>
      </Container>
    </Section>
  )
}

export default Operation
