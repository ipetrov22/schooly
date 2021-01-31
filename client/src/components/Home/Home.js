import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ProblemCard from './ProblemCard';

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    buttons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.content}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Schooly
                    </Typography>
                    <hr />
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Имаш затруднения в училище? Потърси помощ тук.
                        Регистрирай се, за да можеш да задаваш и отговаряш на въпроси.
                    </Typography>

                    <div className={classes.buttons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Main call to action
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                    <ProblemCard/>
                </Grid>
            </Container>
        </main>
    );
}