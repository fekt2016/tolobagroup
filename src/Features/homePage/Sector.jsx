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
// import { devicesMax } from '../../styles/BreakPoint'
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
  }

  &:first-child {
    border-right: 1px solid var(--color-black-900);
  }
`

const ContentBox = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

const RightContainer = styled.div`
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 10rem);
  gap: 20px;

  @media ${devicesMax.md} {
    grid-template-columns: 100%;
    grid-template-rows: none;
  }
`

const StyledData = css`
  background-color: ${(props) => props.bagcolor};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledSec = styled.div`
  ${StyledData}
  grid-row: 1/3;

  @media ${devicesMax.sm} {
    grid-column: none;
    grid-row: none;
  }
`
const StyledSub = styled.div`
  ${StyledData}
  grid-column: 2/-1;
  grid-row: 2/4;

  @media ${devicesMax.sm} {
    grid-column: none;
    grid-row: none;
  }
`
const StyledAge = styled.div`
  ${StyledData}
  grid-column: 2/4;
  grid-row: 5/7;
`
const StyledStaff = styled.div`
  ${StyledData}
  grid-column: 1/2;
  grid-row: 4/6;

  @media ${devicesMax.sm} {
    grid-column: none;
    grid-row: none;
  }
`
const sharedIconStyled = css`
  font-size: 8rem;
  margin-bottom: 2rem;
`
const ChartIcon = styled(AiOutlinePieChart)`
  ${sharedIconStyled}
  color:var(--color-white);
`

const FillIcon = styled(BsHousesFill)`
  ${sharedIconStyled}
  color:var(--color-gold-900);
`
const UsersIcon = styled(FaUsers)`
  ${sharedIconStyled}
  color:var(--color-gold-900);
`
const TimeIcon = styled(MdOutlineMoreTime)`
  ${sharedIconStyled}
  color:var(--color-gold-900);
`
const StyledText = styled.div`
  p {
    margin-bottom: 3rem;
  }
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
            <Heading as="h4">Quality Service Delivery Since 1995</Heading>{' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              enim nesciunt vero earum voluptatibus perferendis? Officiis,
              numquam inventore impedit asperiores animi consequatur iste sunt
              perferendis temporibus, delectus id minus quia totam non molestiae
              fuga deserunt eius ex dicta iure veritatis eligendi ea recusandae
              facere? Sit natus quaerat harum, reprehenderit voluptates iusto
              officia autem voluptate facere ea cupiditate ut, iste impedit.
            </p>
            <Button>more about the toloba group</Button>
          </StyledText>
        </StyledHeader>
        <RightContainer>
          <StyledSec bagcolor="var(--color-gold-900)">
            <ChartIcon />
            <span>14 +</span>
            <p>sectors</p>
          </StyledSec>
          <StyledSub bagcolor="var(--color-gold-200)">
            <FillIcon />
            <spa>60 +</spa>
            <p>subsidiares</p>
          </StyledSub>
          <StyledAge bagcolor="var(--color-gold-200)">
            <TimeIcon />
            <span>25 +</span>
            <p>Year of Existence</p>
          </StyledAge>
          <StyledStaff bagcolor="var(--color-gold-200)">
            <UsersIcon />
            <span>20 +</span>
            <p>core Staffs</p>
          </StyledStaff>
        </RightContainer>
      </StyledSector>
    </Section>
  )
}

export default Sector
