import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import ProblemCard from './ProblemCard';

const useStyles = makeStyles({
    gridContainer: {
        margin: 0,
        width: '100%',
    }
});

export default function Home() {
    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
        </Grid>
    );
}