import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout';
import NoFavorites from '@/components/ui/NoFavorites';
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
      setFavoritesPokemons(localFavorites.pokemonsInFavorites());
  }, [])
  

  return (
    <Layout titlePage='favorites page' >
      { favoritesPokemons.length === 0  ?
      (<NoFavorites />)
      :
      (
        <FavoritePokemons favoritePokemons={favoritesPokemons} />
      )
    }
    </Layout>
  )
}

export default FavoritesPage;
