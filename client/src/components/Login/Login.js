import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MaterialLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/userService';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function Login() {
    const history = useHistory();
    const classes = useStyles();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);
    }

    const submitForm = (e) => {
        e.preventDefault();

        setLoading(true);
        login(formData.email, formData.password)
            .then(user => {
                setLoading(false);
                history.push('/');
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    }

    return (
        <Container component="main" maxWidth="xs">
            {loading && <Loading />}
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Влез
                </Typography>

                <form className={classes.form} noValidate onSubmit={submitForm}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Имейл адрес"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Парола"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Влез
                    </Button>
                    <Grid container>
                        <Grid item>
                            <MaterialLink variant="body2" component={Link} to="/register">
                                {"Нямате акаунт? Регистрирайте се тук."}
                            </MaterialLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}