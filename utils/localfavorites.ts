const toggleFavorites = (id: number) => {
    
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if ( favorites.includes(id) ){
        favorites = favorites.filter( item => item !==  id );
    } else {
        favorites.push(id);
    }
    console.log(favorites);

    localStorage.setItem("favorites", JSON.stringify(favorites));

}

const existsPokemon = (id: number): boolean => {

    if ( typeof window === 'undefined' ) return false;

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

const pokemonsInFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export {
    toggleFavorites,
    existsPokemon,
    pokemonsInFavorites
}