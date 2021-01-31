import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProblemCard from './ProblemCard';
import Intro from './Intro';

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
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <main>
            <Intro classes={classes} />

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <ProblemCard classes={classes} />
                    <ProblemCard classes={classes} />
                    <ProblemCard classes={classes} />
                    <ProblemCard classes={classes} />
                    <ProblemCard classes={classes} />
                    <ProblemCard classes={classes} />
                    <ProblemCard classes={classes} />
                </Grid>
            </Container>
        </main>
    );
}