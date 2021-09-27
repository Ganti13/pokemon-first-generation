import { useContext } from 'react';

import { Card, 
	Container, 
	WrapperImg, 
	WrapperStats, 
	Title,
	Stats,
	NotFound,
	Loading,
	} from './styles';

import { PokeContext } from '../../contexts/PokeContext';


const PokeCard = () => {

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
    	<Container>
    		{
    			filtered.length > 0 ? filtered.map(poke => (
					<Card key={poke.id} id={poke.id}>
						<Title>{poke.name }</Title>
						<WrapperImg>
							<img
							src={poke.sprites.front_default} 
							alt={poke.name}
							/>
						</WrapperImg>
						<WrapperStats>
							<h2>stats< /h2>
							<Stats>
								<span>Type: </span>{poke.types.map(pokemon => pokemon.type.name).join(' | ')}
							</Stats>
							<Stats>
								<span>Height: </span>{poke.height / 10} m
							</Stats>
							<Stats>
								<span>Weight: </span>{poke.weight / 10} kg
							</Stats>
						</WrapperStats>
					</Card>
    			)) : (
    					<NotFound> 
    						<h1>Nenhum Pokémon encontrado</h1>
    						<img src="/pikachu-chorando.jpeg" alt="pokemon not found" />
    				    </NotFound>
    				)
    		}
    	</Container>
    );
}

export default PokeCard;