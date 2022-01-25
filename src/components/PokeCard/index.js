
import { 
	Container, 
	WrapperImg, 
	WrapperStats, 
	Title,
	Stats,
	} from './styles';

const PokeCard = ({pokemon}) => {
    return (
    	<Container>
			<Title>{pokemon.name }</Title>
			<WrapperImg>
				<img
				src={pokemon.sprites.front_default} 
				alt={pokemon.name}
				/>
			</WrapperImg>
			<WrapperStats>
				<h2>stats</h2>
				<Stats>
					<span>Type: </span>{pokemon.types.map(pokemon => pokemon.type.name).join(' | ')}
				</Stats>
				<Stats>
					<span>Height: </span>{pokemon.height / 10} m
				</Stats>
				<Stats>
					<span>Weight: </span>{pokemon.weight / 10} kg
				</Stats>
			</WrapperStats>
    	</Container>
    );
}

export default PokeCard;