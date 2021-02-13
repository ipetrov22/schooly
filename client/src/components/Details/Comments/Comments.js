import { Typography, TextField, Button } from "@material-ui/core";
import { useState, useContext } from 'react';
import { postComment } from '../../../services/commentService';
import Comment from "./Comment";
import { AuthContext } from '../../../contexts/Auth';

export default function Comments({ initComments, topicId }) {
    const auth = useContext(AuthContext);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(initComments);

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const submitComment = () => {
        if (comment.length > 0) {
            postComment({
                topicId,
                comment: {
                    content: comment,
                    creator: {
                        email: auth.email,
                        id: auth.uid
                    }
                }
            })
                .then(res => {
                    setComment('');
                    setComments([res.data].concat(comments));
                })
                .catch(err => console.log(err));
        }
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
                value={comment}
            />
            <Button onClick={submitComment} variant="contained" color="primary" style={{ marginTop: 10, marginBottom: 20, float: "right" }}>
                Коментирай
            </Button>

            {comments ? comments.map(comment => <Comment key={comment._id} comment={comment} />) : null}

        </div>
    );
}
