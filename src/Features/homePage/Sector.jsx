import styled, { css } from 'styled-components'
import Section from '../../ui/Section'

import { IoTelescope } from 'react-icons/io5'
import { GiJetPack } from 'react-icons/gi'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsHousesFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineMoreTime } from 'react-icons/md'

import Heading from '../../ui/Heading'
import Button from '../../ui/Button'
import { devicesMax } from '../../styles/BreakPoint'
import Card from '../../ui/Card'

const StyledSector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media ${devicesMax.md} {
    grid-template-columns: 1fr;
  }
`
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`
const IconTele = styled(IoTelescope)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: var(--color-red-900);
`
const IconPack = styled(GiJetPack)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: var(--color-red-900);
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 2rem;
    width: 25rem;
    text-align: center;
  }

  &:first-child {
    border-right: 1px solid var(--color-black-900);

    @media ${devicesMax.md} {
      border-right: none;
    }
  }
`

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 4rem;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`

const RightContainer = styled.div`
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 10rem);
  gap: 20px;

  @media ${devicesMax.md} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  @media ${devicesMax.sm} {
    padding: 1rem;
  }
`

const sharedIconStyled = css`
  font-size: 8rem;
  margin-bottom: 2rem;
  color: var(--color-secoundary-900);
`
const ChartIcon = styled(AiOutlinePieChart)`
  ${sharedIconStyled}
`

const FillIcon = styled(BsHousesFill)`
  ${sharedIconStyled}
`
const UsersIcon = styled(FaUsers)`
  ${sharedIconStyled}
`
const TimeIcon = styled(MdOutlineMoreTime)`
  ${sharedIconStyled}
`
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  p {
    margin-bottom: 3rem;
    text-align: center;
    hyphens: none;
  }
`

const P = styled.p`
  color: var(--color-secoundary-900);
`

function Sector() {
  return (
    <Section type="sector">
      <StyledSector>
        <StyledHeader>
          <ContentBox>
            <TextBox>
              <IconTele />
              <Heading as="h4">vision</Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illum magni in.
              </p>
            </TextBox>
            <TextBox>
              <IconPack />
              <Heading as="h4">mission</Heading>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </TextBox>
          </ContentBox>
          <StyledText>
            <Heading as="h4">Quality Service Delivery Since 1995</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              enim nesciunt vero earum voluptatibus perferendis? Officiis,
              numquam inventore impedit asperiores animi consequatur iste sunt
              perferendis temporibus, delectus id minus quia totam non molestiae
              fuga deserunt eius ex dicta iure veritatis eligendi ea recusandae
              facere? Sit natus quaerat harum, reprehenderit voluptates iusto
              officia autem voluptate facere ea cupiditate ut, iste impedit.
            </p>
            <Button>more about the toloba group &rarr;</Button>
          </StyledText>
        </StyledHeader>
        <RightContainer>
          <Card type="sec" bagcolor="var(--color-primary-900)">
            <ChartIcon />
            <P>14 +</P>
            <P>sectors</P>
          </Card>
          <Card type="sub" bagcolor="var(--color-primary-700)">
            <FillIcon />
            <P>60 +</P>
            <P>subsidiares</P>
          </Card>
          <Card type="age" bagcolor="var(--color-primary-700)">
            <TimeIcon />
            <P>25 +</P>
            <P>Year of Existence</P>
          </Card>
          <Card type="staff" bagcolor="var(--color-primary-700)">
            <UsersIcon />
            <P>20 +</P>
            <P>core Staffs</P>
          </Card>
        </RightContainer>
      </StyledSector>
    </Section>
  )
}

export default Sector
