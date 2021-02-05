import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth';

export default function Intro({ classes }) {
    const auth = useContext(AuthContext);

    const buttons = auth ?
        <Grid item>
            <Button component={Link} to="/ask" variant="contained" color="primary">
                Задай въпрос
            </Button>
        </Grid>
        : <React.Fragment>
            <Grid item>
                <Button component={Link} to="/login" variant="contained" color="primary">
                    Влез
                </Button>
            </Grid>
            <Grid item>
                <Button component={Link} to="/register" variant="outlined" color="primary">
                    Регистрирай се
                </Button>
            </Grid>
        </React.Fragment>

    return (
        <div className={classes.content}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Schooly
                </Typography>
                <hr />
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Имаш затруднения в училище? Потърси помощ тук.
                    {auth ? null : 'Влез или се регистрирай, за да можеш да задаваш и отговаряш на въпроси.'}
                </Typography>

                <div className={classes.buttons}>
                    <Grid container spacing={2} justify="center">
                        {buttons}
                    </Grid>
                </div>
            </Container>
        </div>
    )
}