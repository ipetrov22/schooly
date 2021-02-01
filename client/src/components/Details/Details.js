import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

export default function Details() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="overline" display="block" gutterBottom>
                       Subject 11 Grade
                    </Typography>

                    <Typography variant="h4" component="h4">
                        I need help with this and that
                    </Typography>

                    <Typography variant="caption" display="block" gutterBottom>
                        Jan 28, 2021 by email@email.com
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                </Grid>
            </Grid>
        </Container>

    );
}