
import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard/";
import { Container } from './styles';

const Home = () => {
	

    return (
    	<>
	        <Header />
	        <Container>
	        	<PokeCard />
	        </ Container>
    	</>
    );
}

export default Home;