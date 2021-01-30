import { Redirect, Switch, Route } from 'react-router-dom';

import Login from './components/Login';


export default function AppRouter() {
    return (
        <Switch>
            <Route path="/login" component={Login} />

            <Redirect to="/" />
        </Switch>
    );
}