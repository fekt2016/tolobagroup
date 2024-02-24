import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import { Link } from 'react-router-dom'

const StyledSide = styled.aside`
  grid-column: 7/-1;
  grid-row: 1/5;

  background-color: var(--color-primary-900);
  padding: 0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media ${devicesMax.md} {
    grid-column: 1/-1;
    grid-row: 4/-1;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Card = styled(Link)`
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  height: 12rem;
  width: 100%;
  display: flex;

  @media ${devicesMax.md} {
    width: 24rem;
  }
`
const ImgBox = styled.div`
  width: 50%;
  padding: 1rem;
  @media ${devicesMax.md} {
    padding: 0.5rem;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

const TextBox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  p {
    @media ${devicesMax.md} {
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

function SideNews() {
  return (
    <StyledSide>
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
    </StyledSide>
  )
}

export default SideNews
