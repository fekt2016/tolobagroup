/*eslint react/prop-types : 0 */
import styled from 'styled-components'
import Spinner from '../ui/Spinner'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useUser } from '../Features/Auth/useUser'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const { isLoading, isAuthenticated } = useUser()

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isAuthenticated, isLoading, navigate],
  )

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if (isAuthenticated) return children
}

export default ProtectedRoute
