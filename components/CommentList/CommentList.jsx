import { Comment } from "../Comment/Comment";
import { Suspense } from "react";

export function CommentList({ comments, authStatus }) {
  return comments.map((comment) => (
    <div key={comment.id} className="comment-stack">
      <Comment {...comment} authStatus={authStatus} />
    </div>
  ));
}
