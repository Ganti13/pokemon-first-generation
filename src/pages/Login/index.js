import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Input, Form, Button } from './styles';
import { auth } from '../../utils/auth';

const Login = () => {

	const history = useHistory();

	const [form, setForm] = useState({ 
		email: '',
		password: ''
	})

	const [error, setError] = useState(false);

	const handleLogin = e => {
		e.preventDefault();

		const res = auth(form);

		if(!!res){
			localStorage.setItem('token', res.token);
			history.push('/');
		}else{
			setError(true);
		}

		setForm({
			email: '',
			password: ''
		});
		
		
	}

	return (
		<Container>
			<div className='logologin'>
				<img src='/pikachu.png'
				alt="pikachu" />
			</div>
			<Form onSubmit={handleLogin} onKeyDown={e => e.key === 13 && {handleLogin}}>
				{error && <p>E-mail ou senha incorreto</p>}
				<Input
				placeholder='use "pokemon@pokemon.com"'
				value={form.email}
				onChange={e => setForm({...form, email: e.target.value})}
				/>
				<Input
				type='password'
				placeholder='use "pokemon"'
				value={form.password}
				onChange={e => setForm({...form, password: e.target.value})}
				/>
				<Button type='submit'>Entrar</Button>
			</Form>
		</Container>
	);
}

export default Login;