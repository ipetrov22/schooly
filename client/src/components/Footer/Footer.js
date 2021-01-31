import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../Copyright';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    );
}