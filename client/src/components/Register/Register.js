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
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import validators from '../../utils/validators';
import { register } from '../../services/userService';
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const history = useHistory();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [validationData, setValidationData] = useState({
        errors: {
            email: '',
            password: '',
            repeatPassword: ''
        },
        touched: {
            email: false,
            password: false,
            repeatPassword: false
        }
    })

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newFormData = { ...formData };
        newFormData[field] = value;
        setFormData(newFormData);

        const newValidationData = { ...validationData };
        newValidationData.errors[field] = validators[field](value, formData.password);
        newValidationData.touched[field] = true;
        setValidationData(newValidationData);
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (!validationData.errors.email && !validationData.errors.password && !validationData.errors.repeatPassword
            && validationData.touched.email && validationData.touched.password && validationData.touched.repeatPassword) {
            setLoading(true);
            register(formData.email, formData.password)
                .then(user => {
                    setLoading(false);
                    history.push('/');
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error);
                });
        }
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
                    Регистрация
                </Typography>
                <form className={classes.form} noValidate onSubmit={submitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Имейл адрес"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                error={validationData.touched.email && validationData.errors.email ? true : false}
                                helperText={validationData.touched.email && validationData.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Парола"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                error={validationData.touched.password && validationData.errors.password ? true : false}
                                helperText={validationData.touched.password && validationData.errors.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="repeatPassword"
                                label="Повтори паролата"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                error={validationData.touched.repeatPassword && validationData.errors.repeatPassword ? true : false}
                                helperText={validationData.touched.repeatPassword && validationData.errors.repeatPassword}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Регистрация
                    </Button>
                    <Grid container>
                        <Grid item>
                            <MaterialLink variant="body2" component={Link} to="/login">
                                Вече имате акаунт? Влезте от тук.
                            </MaterialLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}