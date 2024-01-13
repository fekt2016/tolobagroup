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
const ContentBox = styled.div`
  background-color: var(--color-white);
`
const TextBox = styled.div`
  padding: 4rem;

  p {
    hyphens: none;
    text-align: center;
  }
`
const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    hyphens: none;
    text-align: center;
  }

  @media ${devicesMax.md} {
    p {
      margin-top: 8rem;
      margin-bottom: 8rem;
    }
  }
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            repellat ipsam facere itaque qui aspernatur inventore nobis
            voluptatem nisi! Quod maxime quia voluptatem rerum?
          </p>
          <Button>Explore All Sectors</Button>
        </FirstBox>
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
