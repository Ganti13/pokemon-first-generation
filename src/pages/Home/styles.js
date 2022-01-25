import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px;
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

