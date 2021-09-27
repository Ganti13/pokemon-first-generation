import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PokeContext } from '../../contexts/PokeContext';
import  { Container, Input, Logout, Logo } from './styles';


const Header = () => {
    const history = useHistory()

	const { setFilteredPokemon, filteredPokemon} = useContext(PokeContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setFilteredPokemon(['']);
        history.push('/login');
    }

    return (
        <Container>
            <Input 
            type="text"
            value = {filteredPokemon} 
            onChange={e => setFilteredPokemon(e.target.value.toLowerCase())}
            placeholder='Digite o nome do pokémon'
            />
            <Logo />
            <Logout onClick={handleLogout}>logout</Logout>
        </Container>
    );
}

export default Header;