import Head from 'next/head';
import React, { FC, ReactElement } from 'react'
import { Navbar } from '../ui';

interface Props {
    children: ReactElement,
    titlePage?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, titlePage }) => {
  return (
    <>
        <Head>
            <title>{titlePage ? titlePage: 'Pokemon list'}</title>
            <meta name='author' content='Juan Diego Fandino' />
            <meta name='description' content={`Información sobre el pokemon ${titlePage}`} />
            <meta name='keyboards' content={`${titlePage}, pokemon, pokedex`} />

            <meta property="og:title" content={`Pokemon information ${titlePage}`} />
            <meta property="og:description" content={`Page about ${titlePage}`} />
            <meta property="og:image" content={`${origin}/wallpaper_SEO.jpg`} />

        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  ); 
}
