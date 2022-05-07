import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Component = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #121214;
`

export const ComponentList = styled.div`
  max-width: 1100px;
  margin: auto;
`

export const Background = styled.div`
  background-color: #121214;
`

export const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 56px;
  border-radius: 24px;
  background-color: #161616;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h1`
  padding-top: 32px;
  font-size: 36px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
`

export const AllPokemonsTitle = styled.h2`
  margin-top: 24px;
  font-size: 28px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
`

export const PokemonImage = styled.img`
  height: 200px;
  width: 200px;
`

export const Abilities = styled.h3`
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
`

export const Ability = styled.p`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
  text-align: center;
`

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  background-color: #fff;
  width: 120px;
  height: 32px;
  border: none;
  outline: none;
  margin: 8px;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    filter: brightness(0.7);
  }
`

export const LinkStyled = styled(Link)`
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 48px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`