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

const loading = keyframes` 
    0%{
        opacity: 1;
        transform:  scale(0);

   }
    100%{
        opacity: 0;
        transform: scale(1);
    }
`;

export const Card = styled.div`
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

export const Container = styled.div` 
	width: 100%;
	display: flex;
	gap: 15px;
    min-height: 100vh;
	padding: .8rem;
	justify-content: center;
    flex-wrap: wrap;
    background: radial-gradient(circle, #008294, #009e9d, #00cccb,#add8e6, #00cccb);
    background-size: 150%;
    background-position: center;

    @media(max-width: 660px){
        background-size: 200%;
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

export const NotFound = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: center;
        padding: 1rem;
        font-family: sans-serif;
    }

    img{
        width: 70%;
        border-radius: 10px;
    }
    
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    background: linear-gradient(0deg, transparent, #00a2b8, #ffff86, transparent);
    width: 100%;
    position: relative;

    &::after{
        content : '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(/pokemons.png);
        transform: translateY(100%);
        background-position: center;
        background-size: contain;
        background-repeat:  no-repeat;
    }


    div{
        margin-right: 5px;
        font-weight: 600;
        font-size: 8rem;
        animation: ${loading} 3s linear infinite;
        opacity: 0;

        @media(max-width: 660px){
            font-size: 4rem;
        }

        &:nth-child(2){
            animation-delay: .3s;
        }

        &:nth-child(3){
            animation-delay: .6s;
        }

        &:nth-child(4){
            animation-delay: .9s;
        }

        &:nth-child(5){
            animation-delay: 1.2s;
        }

        &:nth-child(6){
            animation-delay: 1.5s;
        }

        &:nth-child(7){
            animation-delay: 1.8s;
        }

    }

`;

