import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function SimpleCard({ classes }) {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Jan 09 2021
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Математика
                    </Typography>
                    <Typography color="textSecondary">
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
