/* eslint react/prop-types: 0 */

import styled, { keyframes } from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'

const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
  animation: ${fadeIn} 500ms ease-in-out;
  @media ${devicesMax.md} {
    height: 70vh;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const StyledVideo = styled.video`
  height: 100%;
`
function Background({ playStatus, groupCount }) {
  if (playStatus) {
    return (
      <StyledBackground>
        <StyledVideo autoPlay>
          <source src="../../../toloba.mp4" type="video/mp4" />
        </StyledVideo>
      </StyledBackground>
    )
  } else if (groupCount === 0) {
    return (
      <StyledBackground>
        <Img src="../../../tolo555.jpeg" alt="background" />
      </StyledBackground>
    )
  } else if (groupCount === 1) {
    return (
      <StyledBackground>
        <Img src="../../../unsplash1.jpg" alt="background" />
      </StyledBackground>
    )
  } else if (groupCount === 2) {
    return (
      <StyledBackground>
        <Img src="../../../unsplash2.jpg" alt="background" />
      </StyledBackground>
    )
  }
}

export default Background
