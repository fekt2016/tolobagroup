import styled, { css } from 'styled-components'
import Section from '../../ui/Section'
import Heading from '../../ui/Heading'
import { FaMailBulk, FaPhoneVolume } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Container = styled.div`
  padding: 4rem;
`
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    flex: 1;
  }
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  div {
    padding: 4rem 2rem;
    flex: 1;
    background-color: var(--color-gold-200);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin-bottom: 2rem;
    }
  }
`
const StyledIcon = css`
  font-size: 7rem;
  margin-bottom: 2rem;
`

const MailIcon = styled(FaMailBulk)`
  ${StyledIcon}
`
const PhoneIcon = styled(FaPhoneVolume)`
  ${StyledIcon}
`

const LocationIcon = styled(FaLocationDot)`
  ${StyledIcon}
`

function ContactDetail() {
  return (
    <Section type="contact">
      <Container>
        <TopContainer>
          <div>
            <p>need help</p>
            <Heading as="h2">Head Office Ghana</Heading>
          </div>
          <div>
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
          </div>
        </TopContainer>
        <BottomContainer>
          <div>
            <PhoneIcon />
            <p>phone</p>
            <Heading as="h5">+233 (0) 244388190</Heading>
          </div>
          <div>
            <MailIcon />
            <p>email</p>
            <Heading as="h5">fekt2016@icloud.com</Heading>
          </div>
          <div>
            <LocationIcon />
            <p>location</p>
            <Heading as="h5">abelempke opposite marwako fast food</Heading>
          </div>
        </BottomContainer>
      </Container>
    </Section>
  )
}

export default ContactDetail
