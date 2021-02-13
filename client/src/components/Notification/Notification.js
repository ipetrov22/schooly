import { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { NotificationContext } from '../../contexts/Notification';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
    root: {
        width: '100%'
    },
}));

export default function Notification() {
    const { notification, setNotification } = useContext(NotificationContext);
    const classes = useStyles();

    const handleClose = () => {
        setNotification({ ...notification, message: '' });
    };

    return (
        <div className={classes.root}>
            <Snackbar open={!!notification.message} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notification.type}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </div>
    );
}