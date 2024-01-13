/* eslint react/prop-types: 0 */
import styled from 'styled-components'

const Styledlist = styled.div`
  position: relative;
  z-index: 10;
`
const StyledItems = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  display: none;
`
function DropDown({ childern }) {
  return (
    <>
      <Styledlist>
        {childern}
        <StyledItems></StyledItems>
      </Styledlist>
    </>
  )
}

export default DropDown
