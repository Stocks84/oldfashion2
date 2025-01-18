import React, { useState } from "react";
import { postComment } from "../services/gameService"; // Import the API service

const CommentSection = ({ gameId, initialComments = [] }) => {
    const [comments, setComments] = useState(initialComments); // Holds the list of comments
    const [newComment, setNewComment] = useState(""); // Holds the value of the new comment
    const [error, setError] = useState(""); // Error state

    const handleCommentSubmit = async () => {
        if (!newComment.trim()) {
            setError("Comment cannot be empty."); // Validate empty input
            return;
        }

        try {
            const comment = await postComment(gameId, newComment); // Call the backend
            setComments([...comments, comment]); // Append the new comment
            setNewComment(""); // Clear the input
            setError(""); // Clear error
        } catch (err) {
            setError("Failed to post comment. Please try again."); // Handle error
        }
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.user}</strong>: {comment.text}
                    </li>
                ))}
            </ul>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows="3"
                className="form-control"
            />
            <button onClick={handleCommentSubmit} className="btn btn-primary mt-2">
                Submit
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        </div>
    );
};

export default CommentSection;
