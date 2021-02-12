import { Typography, TextField, Button } from "@material-ui/core";
import Comment from "./Comment";

export default function Comments() {
    return (
        <div>
            <Typography variant="h4" component="h4" style={{ marginTop: 80, marginBottom: 40 }}>
                Коментари
            </Typography>

            <TextField
                id="outlined-multiline-static"
                label="Коментирай"
                multiline
                fullWidth
                variant="outlined"
            />
            <Button variant="contained" color="primary" style={{ marginTop: 10, marginBottom: 20, float: "right" }}>
                Коментирай
            </Button>

            <Comment />
            <Comment />
            <Comment />
            <Comment />

        </div>
    );
}
