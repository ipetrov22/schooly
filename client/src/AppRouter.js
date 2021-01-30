import { Redirect, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';


export default function AppRouter() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Redirect to="/" />
        </Switch>
    );
}