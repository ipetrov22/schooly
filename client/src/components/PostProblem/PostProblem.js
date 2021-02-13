import SchoolIcon from '@material-ui/icons/School';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    CssBaseline,
    TextField,
    Typography,
    Container,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import validators from '../../utils/validators';
import { postTopic } from '../../services/topicService';
import { AuthContext } from '../../contexts/Auth';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function PostProblem() {
    const auth = useContext(AuthContext);
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        grade: '',
        description: ''
    });

    const [validationData, setValidationData] = useState({
        errors: {
            title: '',
            subject: '',
            grade: '',
            description: ''
        },
        touched: {
            title: false,
            subject: false,
            grade: false,
            description: false
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
        if (!validationData.errors.title && !validationData.errors.subject && !validationData.errors.grade
            && !validationData.errors.description && validationData.touched.title
            && validationData.touched.subject && validationData.touched.grade && validationData.touched.description) {
            setLoading(true);
            postTopic({ ...formData, creator: { email: auth.email, id: auth.uid } })
                .then((res) => {
                    setLoading(false);
                    const id = res.data._id;
                    history.push(`/details/${id}`);
                })
                .catch(e => {
                    setLoading(false);
                    console.log(e);
                });
        }

    }

    return (
        <Container component="main" maxWidth="xs">
            {loading && <Loading />}
            <CssBaseline />
            <div className={classes.paper}>
                <SchoolIcon style={{ fontSize: 50 }}>
                    <LockOutlinedIcon />
                </SchoolIcon>
                <Typography component="h1" variant="h5">
                    Задай въпрос
                </Typography>

                <form className={classes.form} noValidate onSubmit={submitForm}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Тема"
                        name="title"
                        autoComplete="title"
                        onChange={handleChange}
                        error={validationData.touched.title && validationData.errors.title ? true : false}
                        helperText={validationData.touched.title && validationData.errors.title}
                    />

                    <FormControl className={classes.formControl}
                        margin="normal"
                        fullWidth
                        required
                    >
                        <InputLabel>Предмет</InputLabel>
                        <Select name="subject" value={formData.subject} onChange={handleChange}>
                            <MenuItem value={"math"}>Математика</MenuItem>
                            <MenuItem value={"bulgarian"}>Български език и литература</MenuItem>
                            <MenuItem value={"english"}>Английски език</MenuItem>
                            <MenuItem value={"german"}>Немски език</MenuItem>
                            <MenuItem value={"french"}>Френски език</MenuItem>
                            <MenuItem value={"russian"}>Руски език</MenuItem>
                            <MenuItem value={"history"}>История и цивилизация</MenuItem>
                            <MenuItem value={"geography"}>География и икономика</MenuItem>
                            <MenuItem value={"biology"}>Биология и ЗО</MenuItem>
                            <MenuItem value={"chemistry"}>Химия и ООС</MenuItem>
                            <MenuItem value={"physics"}>Физика и астрономия</MenuItem>
                            <MenuItem value={"informatics"}>Информатика и информационни технологии</MenuItem>
                            <MenuItem value={"sports"}>Физическо възпитание и спорт</MenuItem>
                            <MenuItem value={"music"}>Музика</MenuItem>
                            <MenuItem value={"art"}>Изобразително изкуство</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}
                        margin="normal"
                        fullWidth
                        required
                    >
                        <InputLabel>Клас</InputLabel>
                        <Select name="grade" value={formData.grade} onChange={handleChange}>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField required
                        name="description"
                        margin="normal"
                        label="Описание"
                        fullWidth
                        multiline
                        onChange={handleChange}
                        error={validationData.touched.description && validationData.errors.description ? true : false}
                        helperText={validationData.touched.description && validationData.errors.description}
                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Публикувай
                        </Button>
                </form>
            </div>
        </Container>
    );
}