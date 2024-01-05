/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import Background from './background'
import { useEffect, useState } from 'react'
import TextField from './TextField'

const Wrapper = styled.header`
  height: 90vh;
  width: 100vw;
`

function Header() {
  let groupData = [
    { text1: 'Toloba Group', text2: 'What you love' },
    { text1: 'Indulge', text2: 'Sport Strength ' },
    { text1: 'Give in All', text2: 'Your passions' },
  ]
  const [groupCount, setGroupCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setGroupCount((count) => {
        return count === 2 ? 0 : count + 1
      })
    }, 6000)
  }, [])

  return (
    <Wrapper>
      <Background groupCount={groupCount} playStatus={playStatus} />
      <TextField
        setGroupCount={setGroupCount}
        setPlayStatus={setPlayStatus}
        groupData={groupData[groupCount]}
        groupCount={groupCount}
        playStatus={playStatus}
      />
    </Wrapper>
  )
}

export default Header
