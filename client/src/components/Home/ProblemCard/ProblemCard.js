import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Jan 09 2021
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Математика
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        12 Клас
                    </Typography>
                    <Typography variant="body2" component="p">
                        Lorem ipsum dolor amet i dont remember the text ahead
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Отвори</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
