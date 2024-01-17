import styled from 'styled-components'
import Section from '../../ui/Section'
import { devicesMax } from '../../styles/BreakPoint'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`

const BoxOne = styled.div`
  padding: 2rem;
  grid-column: 1/7;
  grid-row: 1/2;

  display: flex;
  gap: 10px;

  @media ${devicesMax.md} {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
  @media ${devicesMax.sm} {
    flex-direction: column;
  }
`
const BoxTwo = styled.aside`
  padding: 1rem;
  grid-column: 7/-1;
  grid-row: 1/5;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${devicesMax.md} {
    flex-direction: row;
    grid-column: 1/-1;
    grid-row: 4/-1;
    padding: 0.5rem;
    gap: 5px;
  }
`
const BoxThird = styled.div`
  padding: 2rem;
  grid-column: 1/7;
  grid-row: 2/4;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media ${devicesMax.md} {
    grid-column: 1/-1;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`
const SmallCard = styled.div`
  flex: 1;
  background-image: url('../../../public/consult.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const BigCard = styled.div`
  background-image: url('../../../public/tolo4546.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: end;

  @media ${devicesMax.lg} {
    flex: 1;
  }
`
const StyledSpan = styled.span`
  color: var(--color-white);
  padding: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 3rem;
  cursor: pointer;
`
const Card = styled.div`
  flex: 1;
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
`
const ImgBox = styled.div`
  width: 100%;
`
const Img = styled.img`
  width: 100%;

  /* @media ${devicesMax.md} {
    /* width: 50%; */
`
const TextBox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    @media ${devicesMax.md} {
      /* font-size: 1rem; */
    }
  }
  @media ${devicesMax.md} {
    padding: 0.5rem;
  }
`

const P = styled.p`
  @media ${devicesMax.dm} {
    font-size: 1rem;
  }
`

function Blogs() {
  return (
    <Section type="blog">
      <Container>
        <BoxOne>
          <BigCard>
            <StyledSpan>
              Toloba Groups sporting philanthropy shines bright at Laiyah
              football tournament
            </StyledSpan>
          </BigCard>
          <SmallCard></SmallCard>
        </BoxOne>

        <BoxTwo>
          <Card>
            <ImgBox>
              <Img src="../../../tolo97.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <P>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </P>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo97.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <P>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </P>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo97.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <P>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </P>
            </TextBox>
          </Card>
        </BoxTwo>
        <BoxThird>
          <Card>
            <ImgBox>
              <Img src="../../../tolo88.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <p>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </p>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo91.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <p>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </p>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo93.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <p>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </p>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo95.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <p>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </p>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo96.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <p>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </p>
            </TextBox>
          </Card>
          <Card>
            <ImgBox>
              <Img src="../../../tolo97.jpeg" alt="" />
            </ImgBox>
            <TextBox>
              <p>
                Toloba Group Consult donate to participating schools of Hijab
                Project football tournament
              </p>
            </TextBox>
          </Card>
        </BoxThird>
      </Container>
    </Section>
  )
}

export default Blogs
