// import styled from 'styled-components'
import ContactDetail from '../Features/contact/ContactDetail'
import ContactForm from '../Features/contact/ContactForm'
import Location from '../Features/contact/Location'

import Header from '../ui/Header'
import Main from '../ui/Main'

function Contact() {
  return (
    <>
      <Header src="../../tolo6.jpeg" name="Contact Us" />
      <Main>
        <ContactDetail />
        <ContactForm />
        <Location />
      </Main>
    </>
  )
}

export default Contact
