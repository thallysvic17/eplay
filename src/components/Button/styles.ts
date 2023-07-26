import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  padding: 8px 16px;
  font-weight: bold;
  text-decoration: none;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  padding: 8px 16px;
  font-weight: bold;
  text-decoration: none;
`
