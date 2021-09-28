

export const auth = (user) => {

	if(user.email.toLowerCase() === 'pokemon@pokemon.com' && user.password === 'pokemon'){
		return {user:{name: 'admin'}, token: 'mifainufaifnai'}
	}

	return false;
}

export const authenticate = () => {
	const token = localStorage.getItem('token');

	if(!!token) return true;
	return false;
}