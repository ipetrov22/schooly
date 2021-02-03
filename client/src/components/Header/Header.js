import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textDecoration: "none"
    }
}));

export default function Header() {
    const classes = useStyles();
    const auth = useContext(AuthContext);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit" variant="h6" className={classes.title} component={Link} to="/">
                        Schooly
                    </Typography>
                    {
                        auth ? <Drawer />
                            : <React.Fragment>
                                <Button color="inherit" component={Link} to="/login">Влез</Button>
                                <Button color="inherit" component={Link} to="/register">Регистрирай се</Button>
                            </React.Fragment>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
