import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Intro({ classes }) {

    return (
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
    )
}