import { createContext } from 'react';

import { usePoke } from '../hooks/usePoke';


export const PokeContext = createContext();

const PokeProvider = ({ children }) => {

    const { pokemons, loading, filteredPokemon, setFilteredPokemon } = usePoke();

    return (
        <PokeContext.Provider value={{pokemons, loading, filteredPokemon, setFilteredPokemon}}>
            { children }
        </PokeContext.Provider>
    );
} 

export default PokeProvider;