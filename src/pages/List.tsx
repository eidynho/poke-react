import { AllPokemonsCard } from '../components/AllPokemonsCard'
import { AllPokemonsTitle, Background, ComponentList, Title } from '../components/DetailPokemon/styles'
import { MyPokemonsCard } from '../components/MyPokemonsCard'


export function List() {

  return (
    <Background>
      <ComponentList>
        <Title>My pokemons</Title>
        <MyPokemonsCard />

        <AllPokemonsTitle>All Pokemons</AllPokemonsTitle>
        <div>
          <AllPokemonsCard />
        </div>
      </ComponentList>
    </Background>
  )
}