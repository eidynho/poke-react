import { useEffect, useState } from 'react'
import axios from 'axios'

import { Card, Component, ImagePokemon, LinkStyled, NamePokemon } from './styles'
import { Link } from 'react-router-dom'


type AddedPokemonsType = {
  id: number
  name: string
  abilities: [{
    ability: {
      name: string
    }
  }]
  sprites: string
} 

export function MyPokemonsCard() {
  const [ addedPokemons, setAddedPokemons ] = useState<AddedPokemonsType[]>([])

  useEffect(() => {
    axios.get('http://localhost:3333/pokemons')
      .then(response => {
        setAddedPokemons(response.data)
      })
  }, [])

  return (
    <Component>
      {addedPokemons.map(addedPokemon => (
        <Card>
          <LinkStyled to={`/detail/${addedPokemon.name}`}>
            {addedPokemon.sprites && (
              <ImagePokemon
                src={addedPokemon.sprites}
                alt={addedPokemon.name}
              />
            )}
            <NamePokemon>
              {addedPokemon.name}
            </NamePokemon>
          </LinkStyled>
        </Card>
      ))}
    </Component>
  )
}