import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Comments from './Comments';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOneTopic } from './../../services/topicService';
import { subjectDictionary } from '../../utils/dictionaries';
import React from 'react';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

export default function Details() {
    const classes = useStyles();
    const { id } = useParams();
    const [topic, setTopic] = useState(null);

    useEffect(() => {
        getOneTopic(id)
            .then(res => setTopic({ ...res.data, comments: res.data.comments.reverse() }))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {topic ?
                <React.Fragment>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="overline" display="block" gutterBottom>
                                {subjectDictionary[topic.subject]} {topic.grade} Клас
                            </Typography>

                            <Typography variant="h4" component="h4">
                                {topic.title}
                            </Typography>

                            <Typography variant="caption" display="block" gutterBottom>
                                {topic.date} от {topic.creator && topic.creator.email}
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                {topic.description}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Comments initComments={topic.comments} topicId={topic._id} />
                </React.Fragment>
                :
                <Loading />
            }
        </Container>

    );
}