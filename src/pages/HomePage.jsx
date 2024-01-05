import AboutUs from '../Features/homePage/AboutUs'
import Choose from '../Features/homePage/Choose'
import Company from '../Features/homePage/Company'
import Groups from '../Features/homePage/Groups'
import News from '../Features/homePage/News'
import Sector from '../Features/homePage/Sector'

function HomePage() {
  return (
    <main>
      <AboutUs />
      <Sector />
      <Groups />
      <Company />
      <Choose />
      <News />
    </main>
  )
}

export default HomePage
