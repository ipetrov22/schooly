import { Typography, TextField, Button } from "@material-ui/core";
import { useState } from 'react';
import Comment from "./Comment";

export default function Comments({ comments }) {
    const [comment, setComment] = useState(null);

    const handleChange = (e) => {
        setComment(e.target.value);
    }


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
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" style={{ marginTop: 10, marginBottom: 20, float: "right" }}>
                Коментирай
            </Button>

            {comments ? comments.map(comment => <Comment key={comment._id} comment={comment} />) : null}

        </div>
    );
}
