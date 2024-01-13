import AboutUs from '../Features/homePage/AboutUs'
import Choose from '../ui/Choose'
import Company from '../Features/homePage/Company'

import Groups from '../Features/homePage/Groups'
import News from '../Features/homePage/News'
import Optimists from '../Features/homePage/Optimists'
import Sector from '../Features/homePage/Sector'
import Header from '../Features/homePage/Header'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Sector />
        <Groups />
        <Company />
        <Choose />
        <Optimists />
        <News />
      </main>
    </>
  )
}

export default HomePage
