import { useEffect, useState } from 'react';

import api from '../services//api';

export const usePoke = () => {

	const [pokemons, setPokemons] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let count = 0;
        Array(151).fill().map((_, index) => {
            api.get(`${index + 1}`)
            .then( res => {
                setPokemons(prev => [...prev, res.data]);
                count ++;
                count >= 151 && setLoading(false);
            }).catch(e => console.log(e))
        });

    },[]);


    return {
    	pokemons,
    	loading,
        filteredPokemon,
        setFilteredPokemon
    }
}