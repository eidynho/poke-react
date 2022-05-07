import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Component = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
`

export const Card = styled.div`
  height: 220px;
  width: 160px;
  border-radius: 24px;
  margin: 16px 8px;
  background-color: #131313;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #151515;
  }
`

export const LinkStyled = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

export const ImagePokemon = styled.img`
  width: 140px;
  height: 140px;
`

export const NamePokemon = styled.p`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: #FFF;
`