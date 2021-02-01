import { Redirect, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';


export default function AppRouter() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/details" component={Details}/>

            <Redirect to="/" />
        </Switch>
    );
}