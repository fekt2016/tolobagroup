import About from '../Features/Aboutus/About'
import Header from '../ui/Header'
import Choose from '../ui/Choose'
import Team from '../Features/Aboutus/Team'
import Main from '../ui/Main'

function AboutUsPage() {
  return (
    <>
      <Header src="../../consult.jpeg" name="About us" />
      <Main>
        <About />
        <Choose />
        <Team />
      </Main>
    </>
  )
}

export default AboutUsPage
