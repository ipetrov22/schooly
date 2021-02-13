import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { subjectDictionary } from '../../../utils/dictionaries';

export default function SimpleCard({ classes, topic }) {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {topic.date}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {subjectDictionary[topic.subject]}
                    </Typography>
                    <Typography color="textSecondary">
                        {topic.grade} Клас
                    </Typography>
                    <Typography variant="body2" className={classes.cardTitle} component="p">
                        {topic.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={`/details/${topic._id}`}>Отвори</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
