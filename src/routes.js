import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PokeContext from './contexts/PokeContext';
import { authenticate } from './utils/auth';

import Home from './pages/Home';
import Login from './pages/Login';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (authenticate() ? <Component {...props} /> :  
    <Redirect to="/login" />)} />                         
)


const Routes = () => {


    return(
        <PokeContext>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        </PokeContext>
    );
}

export default Routes;