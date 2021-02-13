import { Grid, Paper } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

export default function Comment({ comment }) {
    return (
        <Paper style={{ padding: "40px 20px", marginTop: 10, clear: "both" }}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <PersonIcon />
                </Grid>
                <Grid justifycontent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{comment.creator && comment.creator.email}</h4>
                    <p style={{ textAlign: "left" }}>
                        {comment.content}
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                        {comment.date}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    )
}