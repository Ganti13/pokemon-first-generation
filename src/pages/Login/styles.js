import styled from 'styled-components';

export const Container = styled.div` 
	width:100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(0deg, transparent, #00a2b8, transparent);

	.logologin{
		width: 180px;
		height: 180px;
		position: absolute;
		transform: translatey(-100%);

		img{
			width: 100%;
			height: 100%;
		}
	}

`;


export const Form = styled.form` 
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 300px;
	height: 400px;
	background: linear-gradient(0deg, transparent, #4eeaff, transparent);
	border-radius: 100px 5px 100px 5px;
	gap: .5rem;

	p{
		color: #fff;
		background: linear-gradient(90deg, transparent , #ff0000 , #ff0000, transparent );
		width: 100%;
		text-align:center;
		font-weight: 600;
		font-size: .9rem;
	}
`;



export const Input = styled.input` 
	padding: .8rem;
	background-color: rgba(0,0,0, .5);
	border: 0;
	width: 80%;
	border-radius: 10px;
	color: #fff;

	&:focus {
		outline: 0;
	}
`;

export const Button = styled.button` 
	width: 80%;
	letter-spacing: 5px;
	font-weight: 700;
	padding: .3rem;
	font-family: sans-serif;
`;