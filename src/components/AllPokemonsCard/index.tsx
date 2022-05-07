import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, LinkStyled } from './styles'


type PokemonType = {
  name: string
  url: string
}

export function AllPokemonsCard() {
  const [ pokemons, setPokemons ] = useState<PokemonType[]>([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(response => {
      setPokemons(response.data.results)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <Container>
      { pokemons.map(pokemon => (
        <Card>
          <LinkStyled to={`/detail/${pokemon.name}`}>
            {pokemon.name}
          </LinkStyled>
        </Card>
      )) }
    </Container>
  )
}