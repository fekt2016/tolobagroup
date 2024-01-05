import styled from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'
import Button from '../../ui/Button'
const StyledGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${devicesMax.lg} {
  }
  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
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
const ContentBox = styled.div``
const TextBox = styled.div`
  padding: 3rem;
  background-color: var(--color-white);
`
function Groups() {
  return (
    <Section type="group">
      <StyledGroup>
        <div>
          <Heading as="h3">Sectors of Operation</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            repellat ipsam facere itaque qui aspernatur inventore nobis
            voluptatem nisi! Quod maxime quia voluptatem rerum?
          </p>
          <Button>Explore All Sectors</Button>
        </div>
        <ContentBox>
          <ImgBox background="../../../tolo4.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">Islamic Center for Guidance </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../tolo3.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">toloba sport consult </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../tolo2.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">energy and oil </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../consult.jpeg"></ImgBox>
          <TextBox>
            <Heading as="h4">energy and oil </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc3.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">energy and oil </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc7.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">energy and oil </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc8.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">energy and oil </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox>
          <ImgBox background="../../../pc6.jpg"></ImgBox>
          <TextBox>
            <Heading as="h4">energy and oil </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magni alias id iste, illo vitae, obcaecati, tempore
              quisquam delectus dolores dignissimos totam in laboriosam.
            </p>
          </TextBox>
        </ContentBox>
      </StyledGroup>
    </Section>
  )
}

export default Groups
