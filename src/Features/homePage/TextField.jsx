/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { IoPlay, IoPause, IoArrowForward } from 'react-icons/io5'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const StyledTextContainer = styled.div`
  padding: 4rem;
  /* background-color: aliceblue; */
`
const HeadBox = styled.div``

const GroupEx = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: fit-content;
  margin-top: 7rem;
  padding: 0.5rem 0.8rem;
  padding-left: 5rem;
  background-color: var(--color-secoundary-900);
  border-radius: 100px;
  cursor: pointer;

  @media ${devicesMax.md} {
    margin-top: 2rem;
  }
  @media ${devicesMax.sm} {
    margin-top: 7rem;
  }
`

const StyledDotPlay = styled.div`
  margin-top: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledDotList = styled.ul`
  display: flex;
  align-items: center;
  gap: 23px;
`
const StyledDotItem = styled.li`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--color-white);
  ${({ count, groupcount }) =>
    count === groupcount
      ? 'background-color: var(--color-secoundary-900)'
      : 'background-color: var(--color-white)'}
`
const StyledPlay = styled.div`
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--color-secoundary-900);
    font-size: 2rem;
    text-transform: capitalize;
  }
`

const IconPlay = styled(IoPlay)`
  color: var(--color-white);
  font-size: 3rem;
  cursor: pointer;
`

const ArrowBox = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-primary-900);
  border-radius: 50%;
`
const StyledControl = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-secoundary-900);
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.5);
  }
`

const IconPause = styled(IoPause)`
  color: var(--color-white);
  font-size: 3rem;
`

function TextField({
  setGroupCount,
  setPlayStatus,
  groupData,
  groupCount,
  playStatus,
}) {
  return (
    <StyledTextContainer>
      <HeadBox>
        <Heading as="h1">{groupData.text1}</Heading>
        <Heading as="h2">{groupData.text2}</Heading>
      </HeadBox>
      <GroupEx>
        <p>Explore the feature</p>
        <ArrowBox>
          <IoArrowForward />
        </ArrowBox>
      </GroupEx>
      <StyledDotPlay>
        <StyledDotList>
          <StyledDotItem
            onClick={() => setGroupCount(0)}
            count={groupCount}
            groupcount={0}
          ></StyledDotItem>
          <StyledDotItem
            onClick={() => setGroupCount(1)}
            count={groupCount}
            groupcount={1}
          ></StyledDotItem>
          <StyledDotItem
            onClick={() => setGroupCount(2)}
            count={groupCount}
            groupcount={2}
          ></StyledDotItem>
        </StyledDotList>
        <StyledPlay>
          <p>see the video </p>
          <StyledControl>
            {!playStatus ? (
              <IconPlay
                onClick={() => {
                  setPlayStatus(true)
                }}
              />
            ) : (
              <IconPause
                onClick={() => {
                  setPlayStatus(false)
                }}
              />
            )}
          </StyledControl>
        </StyledPlay>
      </StyledDotPlay>
    </StyledTextContainer>
  )
}

export default TextField
