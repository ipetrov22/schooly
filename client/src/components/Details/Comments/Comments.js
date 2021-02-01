import { Typography } from "@material-ui/core";
import Comment from "./Comment";

export default function Comments() {
    return (
        <div style={{ padding: 14 }}>
            <Typography variant="h4" component="h4" style={{ marginTop: 80, marginBottom: 40 }}>
                Comments
            </Typography>

            <Comment />
            <Comment />
            <Comment />
            <Comment />

        </div>
    );
}
