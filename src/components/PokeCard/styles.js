import styled, { keyframes } from 'styled-components';

const shakeCard = keyframes` 
    0%, 50%{
        transform: translateY(0px);
    }
    25%{
        transform: translateY(5px);
    }
    75%{
        transform: translateY(-5px);
    }
    100%{
        transform: translate(0);
    }
`;




export const Container = styled.div` 
	width: 200px;
    height: 250px;
    display: flex;
    padding: .5rem;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(90deg, var(--card-color), #fff, var(--card-color));
    box-shadow: 2px 2px 5px #222;

    @media(max-width: 660px){
        width: 150px;
        height: 200px;
    }
    
    &:hover{
    	animation: ${shakeCard} .9s linear infinite;

    }

`;

export const WrapperImg = styled.div` 
	height: 60%;
    width: 100%;

	img{
		width: 100%;
		height: 140px;
        border-radius: 5px;
        background-image: url('/paisagem.jpeg');
        background-size: cover;

        @media(max-width: 660px){
            font-size: .8rem;
            height: 110px;
        }
	}
`;

export const WrapperStats = styled.section`
    width: 100%;
    height: 30%;
    box-shadow: inset 2px 2px 5px #000;
    border-radius: 5px;
    margin-top: .2rem;
    padding: 0 0 0 .4rem;
    background: linear-gradient(90deg, #005d6d, var(--card-color), #005d6d);


    h2{
        text-align: center;
        font-size: 1rem;
        color: var(--font-color-card2);
        margin-Bottom: 0;
        letter-Spacing: .1rem;

        @media(max-width: 660px){
            font-size: .7rem;

        }

    }
`;

export const Stats = styled.div` 
    width: 100%;
    font-weight: 900;
    font-size: .7rem;
    color: var(--font-color-card);

    @media(max-width: 660px){
        font-size: .6rem;
        transform: translatey(-4px);
    }

    span{
        color: var(--font-color-card3);;
    }
`;

export const Title = styled.h1` 
    color: var(--font-color);
    height: 10%;
    font-size: 1.25rem;
    font-weight: 700;

    @media(max-width: 660px){
        font-size: 1rem;
    }
`;





