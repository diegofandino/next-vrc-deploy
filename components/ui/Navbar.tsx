import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value,
    }}>

        <Image alt="imagePokemon" width={70} height={70} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png" />
        <NextLink href="/" style={{display: 'flex'}}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemón</Text>
        </NextLink>

        <Spacer css={{flex: '1'}} />

        <NextLink href="/favorites" style={{display: 'flex'}}>
             <Text color='white' >Favorites</Text>
        </NextLink>
    </div>
  )
}
