// import styled from 'styled-components'
import ContactDetail from '../Features/contact/ContactDetail'
import ContactForm from '../Features/contact/ContactForm'
import Location from '../Features/contact/Location'

import Header from '../ui/Header'

function Contact() {
  return (
    <>
      <Header src="../../public/tolo6.jpeg" name="Contact Us" />
      <ContactDetail />
      <ContactForm />
      <Location />
    </>
  )
}

export default Contact
