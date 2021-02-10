import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';
import PostProblem from './components/PostProblem/PostProblem';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth';


export default function AppRouter() {
    const auth = useContext(AuthContext);
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login">
                {auth ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register">
                {auth ? <Redirect to="/" /> : <Register />}
            </Route>

            <Route path="/details/:id">
                {auth ? <Details /> : <Redirect to="/login" />}
            </Route>
            <Route path="/ask">
                {auth ? <PostProblem /> : <Redirect to="/login" />}
            </Route>

            <Redirect to="/" />
        </Switch>
    );
}