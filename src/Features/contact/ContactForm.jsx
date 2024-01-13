import styled from 'styled-components'
import Form from '../../ui/Form'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const Header = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
function ContactForm() {
  return (
    <Section>
      <Header>
        <Heading as="h3">Send Us A Message</Heading>
      </Header>
      <Form>
        <FormRow>
          <Input type="text" placeholder="Name" />
        </FormRow>
        <FormRow>
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Phone Number" />
        </FormRow>
        <FormRow>
          <Input type="textarea" placeholder="Message" />
        </FormRow>
        <FormRow>
          <Button>submit</Button>
        </FormRow>
      </Form>
    </Section>
  )
}

export default ContactForm
