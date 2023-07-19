import { Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
    idPokemon: number;
}

export const FavoritePokemonById: FC<Props> = ({ idPokemon }) => {

    const router = useRouter();

    const goPokemon = () => {
        router.push(`/pokemon/${idPokemon}`);
    }

  return (
    <Card onClick={goPokemon} isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image width={'100%'} height={140} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`} />
    </Card>  
  )
}
