import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled.div`
  height: 48px;
  width: 120px;
  border-radius: 24px;
  padding: 8px 12px;
  margin-top: 24px;
  margin-left: 12px;
  background-color: #131313;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
  

  &:hover {
    background-color: #151515;
  }
`

export const LinkStyled = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`