import Header from '../ui/Header'
import Main from '../ui/Main'
import Profile from '../ui/Profile'

function Ngo() {
  return (
    <>
      <Header
        src="../../public/ngo.webp"
        alt="ngo"
        name="islamic center for guidance"
      />
      <Main>
        <Profile
          msg="Omni Energy is a leading provider of Engineering and Value Added Oilfield Support Services in the Oil and Gas industry. We offer integrated environmental services, including the Distribution of Oilfield Products, Drilling Chemical Solutions, Oil Spill Response Services, and Waste Management Services"
          src="../../energy.jpeg"
          logo="logo"
          heading="toloba energy"
          background="../../energy.jpeg"
        />
      </Main>
    </>
  )
}

export default Ngo
