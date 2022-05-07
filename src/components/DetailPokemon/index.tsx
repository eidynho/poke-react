import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Abilities, Ability, Button, Card, Component, Container, LinkStyled, PokemonImage, Title } from './styles'

type PokemonInfoType = {
  id: number
  name: string
  abilities: [{
    ability: {
      name: string
    }
  }]
  sprites: {
    front_default: string
  }
}

export function DetailPokemon() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoType>({} as PokemonInfoType)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setPokemonInfo(response.data)
      })
  }, [])

  if (!pokemonInfo) {
    return null
  }

  function handleAddPokemon() {
    axios.post('http://localhost:3333/pokemons', {
      id: pokemonInfo.id,
      name: pokemonInfo.name,
      abilities: pokemonInfo.abilities,
      sprites: pokemonInfo.sprites.front_default
    })

    navigate('/list')
  }

  async function handleDeletePokemon() {
    await axios.delete(`http://localhost:3333/pokemons/${pokemonInfo.id}`)
    
    navigate('/list')
  }

  return (
    <Component>
      <Container>
        <Card>
          <Title>Pokemon: {pokemonInfo.name}</Title>

          {pokemonInfo.sprites && (
            <PokemonImage
              src={pokemonInfo.sprites.front_default}
              alt={pokemonInfo.name}
            />
          )}
          {pokemonInfo.abilities && (
            <>
              <Abilities>Abilities</Abilities>
              {pokemonInfo.abilities.map((item) => (
                <Ability>{item.ability.name}</Ability>
              ))}
            </>
          )}
          <div>
            <Button onClick={handleAddPokemon}>Add</Button>
            <Button onClick={handleDeletePokemon}>Remove</Button>
          </div>

          <LinkStyled to="/list">
            <ArrowBackIcon />
            Back
          </LinkStyled>
        </Card>
      </Container>
    </Component>
  )
}