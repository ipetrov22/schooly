import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProblemCard from './ProblemCard';
import Intro from './Intro';
import { getAllTopics } from '../../services/topicService';
import { useState, useEffect } from 'react';

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
    const [topics, setTopics] = useState(null);

    useEffect(() => {
        getAllTopics()
            .then((res) => setTopics(res.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(topics);

    return (
        <main>
            <Intro classes={classes} />

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {topics && topics.map(topic => <ProblemCard key={topic._id} classes={classes} topic={topic}/>)}
                </Grid>
            </Container>
        </main>
    );
}