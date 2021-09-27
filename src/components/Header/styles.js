import styled from 'styled-components';

export const Container = styled.header`
    background: linear-gradient(0deg, var(--background-color), #00a2b8, var(--background-color));
    background-size: 110%;
    background-position: center;
    width: 100%;
    height: 80px;
    display:  flex;    
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;

    @media(max-width: 660px){
    	padding: 0 1rem;
    }
`;

export const Logout = styled.span` 
	color: var(--font-color2);
    font-weight: 700;
    font-size: 1.2rem;
	cursor: pointer; 
`;

export const Input = styled.input` 
	border-radius: 10px;
	height: 50px;
	border: 0;
	padding-left: 1.2rem;
	background-color: rgba(0,0,0, .5);
	font-size: 1rem;
	font-weight: 700;
	color: var(--font-color2);
    outline: 0;

    &:focus{
        border: 1px solid yellow;
    }
`;

export const Logo = styled.div` 
    width: 300px;
    height: 70px;
    background-image: url(/pokemons.png);
    background-size: contain;  
    background-repeat: no-repeat;

    @media(max-width: 660px){
        display: none;
    }
`;
