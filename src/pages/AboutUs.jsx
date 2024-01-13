import About from '../Features/Aboutus/About'
import Header from '../ui/Header'
import Choose from '../ui/Choose'
import Team from '../Features/Aboutus/Team'

function AboutUs() {
  return (
    <>
      <Header src="../../public/consult.jpeg" name="About us" />
      <About />
      <Choose />
      <Team />
    </>
  )
}

export default AboutUs
