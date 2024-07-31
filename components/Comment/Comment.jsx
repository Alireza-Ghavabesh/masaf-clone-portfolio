import { IconBtn } from "@/components/iconBtn/IconBtn";
import { FaEdit, FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa";
import { usePost } from "@/contexts/postContext";
import { useState } from "react";
import {
  createComment,
  updateComment,
  deleteComment,
  toggleCommentLike,
} from "@/services/comments";
import { CommentForm } from "../CommentForm/CommentForm";
import { useSession } from "next-auth/react";
import { useAsyncFn } from "@/hooks/useAsync";
import { CommentList } from "../CommentList/CommentList";

const dateFormater = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export function Comment({ id, text, user, createdAt, likeCount, likedByMe }) {
  const { data: session, status } = useSession();
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {
    post,
    getReplies,
    createLocalComment,
    updateLocalComment,
    deleteLocalComment,
    toggleLocalCommentLike,
  } = usePost();
  const createCommentFn = useAsyncFn(createComment);
  const updateCommentFn = useAsyncFn(updateComment);
  const deleteCommentFn = useAsyncFn(deleteComment);
  const toggleCommentLikeFn = useAsyncFn(toggleCommentLike);
  const childComments = getReplies(id);

  function onCommentReply(text) {
    return createCommentFn
      .execute({
        postId: post.id,
        text: text,
        parentId: id,
        userId: session?.user.id,
      })
      .then((comment) => {
        setIsReplying(false);
        createLocalComment(comment);
      });
  }

  function onCommentUpdate(text) {
    return updateCommentFn
      .execute({
        postId: post.id,
        text: text,
        commentId: id,
        userId: session?.user.id,
      })
      .then((comment) => {
        setIsEditing(false);
        console.log(comment);
        updateLocalComment(id, comment.text);
      });
  }

  function onCommentDelete(text) {
    return deleteCommentFn
      .execute({
        postId: post.id,
        commentId: id,
        userId: session?.user.id,
      })
      .then((comment) => {
        deleteLocalComment(comment.id);
      });
  }

  function onToggleCommentLike() {
    return toggleCommentLikeFn
      .execute({ commentId: id, userId: session?.user.id }, [session?.user.id])
      .then(({ addLike }) => toggleLocalCommentLike(id, addLike));
  }

  return (
    <>
      <div className="comment">
        <div className="header">
          <span className="name">
            {user.firstName} {user.lastName}
          </span>

          <span className="date">
            {dateFormater.format(Date.parse(createdAt))}
          </span>
        </div>
        {isEditing ? (
          <CommentForm
            initialValue={text}
            autoFocus
            onSubmit={onCommentUpdate}
            loading={updateCommentFn.loading}
            error={updateCommentFn.error}
          />
        ) : (
          <div className="message">{text}</div>
        )}

        <div className="footer">
          <IconBtn
            onClick={onToggleCommentLike}
            disabled={toggleCommentLikeFn.loading}
            Icon={likedByMe ? FaHeart : FaRegHeart}
            aria-label={likedByMe ? "Unlike" : "Like"}
          >
            {likeCount}
          </IconBtn>
          {status === "authenticated" && (
            <IconBtn
              Icon={FaReply}
              aria-label={isReplying ? "Cancel Reply" : "Reply"}
              onClick={() => setIsReplying((prev) => !prev)}
              isActive={isReplying}
            ></IconBtn>
          )}

          {session?.user.id == user.id && (
            <IconBtn
              Icon={FaEdit}
              aria-label={isEditing ? "Cancel Edit" : "Edit"}
              onClick={() => setIsEditing((prev) => !prev)}
              isActive={isEditing}
            ></IconBtn>
          )}

          {session?.user.id == user.id && (
            <IconBtn
              Icon={FaTrash}
              aria-label="Delete"
              color={"danger"}
              onClick={onCommentDelete}
              disabled={deleteCommentFn.loading}
            ></IconBtn>
          )}
        </div>
      </div>

      {isReplying && (
        <div className="mt-1 ml-3">
          <CommentForm
            autoFocus
            onSubmit={onCommentReply}
            loading={createCommentFn.loading}
            error={createCommentFn.error}
          />
        </div>
      )}

      {childComments?.length > 0 && (
        <>
          <div
            dir="ltr"
            className={`nested-comments-stack ${
              areChildrenHidden ? "hide" : ""
            }`}
          >
            <button
              className="collapse-line"
              aria-label="Hide Replies"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="nested-comments" dir="rtl">
              <CommentList comments={childComments} />
            </div>
          </div>
          <button
            className={`btn mt-1 mb-1 ${!areChildrenHidden ? "hide" : ""}`}
            onClick={() => setAreChildrenHidden(false)}
          >
            نمایش پاسخ ها
          </button>
        </>
      )}
    </>
  );
}
