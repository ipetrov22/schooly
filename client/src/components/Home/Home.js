import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProblemCard from './ProblemCard';
import Intro from './Intro';
import { getAllTopics } from '../../services/topicService';
import { useState, useEffect } from 'react';
import Loading from '../Loading';

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
    },
    cardTitle: {
        wordBreak: 'break-word',
        paddingTop: '10px'
    }
}));

export default function Home() {
    const classes = useStyles();
    const [topics, setTopics] = useState(null);

    useEffect(() => {
        getAllTopics()
            .then((res) => setTopics(res.data.reverse()))
            .catch((err) => console.log(err));
    }, []);

    return (
        <main>
            <Intro classes={classes} />

            {topics ?
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {topics.map(topic => <ProblemCard key={topic._id} classes={classes} topic={topic} />)}
                    </Grid>
                </Container>
                : <Loading />
            }
        </main>
    );
}