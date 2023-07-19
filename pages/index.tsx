import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import Image from 'next/image'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon/PokemonCard';


interface Props {
  pokemons: SmallPokemon[]
};

const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <Layout titlePage='Listado de pokemons'>
      <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  //get id and image
  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));
  return { props: { pokemons} }
}

export default HomePage;

