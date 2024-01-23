import Header from '../ui/Header'
import Main from '../ui/Main'

import Profile from '../ui/Profile'

function Consult() {
  return (
    <>
      <Header
        src="../../tolo94.jpeg"
        alt="consult"
        name="toloba sports consult"
        msg="A toloba Group that caters for your sport consultations."
      />
      <Main>
        <Profile
          msg="Omni Energy is a leading provider of Engineering and Value Added Oilfield Support Services in the Oil and Gas industry. We offer integrated environmental services, including the Distribution of Oilfield Products, Drilling Chemical Solutions, Oil Spill Response Services, and Waste Management Services"
          src="../../public/energy.jpeg"
          logo="logo"
          heading="toloba energy"
          background="../../energy.jpeg"
        />
      </Main>
    </>
  )
}

export default Consult
