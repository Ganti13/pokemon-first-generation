import {useContext} from 'react';

import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard/";
import { Container, Loading, NotFound } from './styles';
import { PokeContext } from '../../contexts/PokeContext';

const Home = () => {
	const { filteredPokemon, pokemons, loading } = useContext(PokeContext);

	if(loading){
		const load = ['l', 'o', 'a', 'd', 'i','n','g'];
		return (
			<Loading>
				{
					load.map((letter, index) => <div key={index}>{letter}</div>)
				}
			</Loading>
			)
	}

	const filtered = pokemons.filter(pokemon => pokemon.name.includes(filteredPokemon));
	

    return (
    	<>
	        <Header />
	        <Container>
	        	{filtered.length > 0 ? filtered.map(pokemon => (
					<PokeCard key={pokemon.name} pokemon={pokemon} />
				)) : (
					<NotFound> 
						<h1>Nenhum Pokémon encontrado</h1>
						<img src="/pikachu-chorando.jpeg" alt="pokemon not found" />
					</NotFound>
				)}
	        </ Container>
    	</>
    );
}

export default Home;