import { Container, Text } from '@nextui-org/react'
import React from 'react'

const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
          <Text h1> There are not favorites </Text>
    </Container>
  )
}

export default NoFavorites;
