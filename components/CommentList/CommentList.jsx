import { Comment } from "../Comment/Comment";

export function CommentList({ comments }) {
  return comments.map((comment) => (
    <div key={comment.id} className="comment-stack">
      <Comment {...comment} />
    </div>
  ));
}
