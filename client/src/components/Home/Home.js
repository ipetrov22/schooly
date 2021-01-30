import ProblemCard from './ProblemCard';
import Grid from '@material-ui/core/Grid'

export default function Home() {
    return (
        <Grid container item xs={12} spacing={3}>
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
            <ProblemCard />
        </Grid>
    );
}