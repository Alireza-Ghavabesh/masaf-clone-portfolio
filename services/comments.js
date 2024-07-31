import { makeRequest } from "./makeRequest";

export function createComment({ postId, text, parentId, userId }) {
  const fd = new FormData();
  fd.append("text", text);
  fd.append("postId", postId);
  fd.append("parentId", parentId);
  fd.append("userId", userId);
  return makeRequest(`/createComment`, {
    method: "POST",
    data: fd,
  });
}

export function updateComment({ postId, text, commentId, userId }) {
  const fd = new FormData();
  fd.append("text", text);
  fd.append("postId", postId);
  fd.append("commentId", commentId);
  fd.append("userId", userId);
  return makeRequest(`/updateComment`, {
    method: "POST",
    data: fd,
  });
}

export function deleteComment({ postId, commentId, userId }) {
  const fd = new FormData();
  fd.append("postId", postId);
  fd.append("commentId", commentId);
  fd.append("userId", userId);
  return makeRequest(`/deleteComment`, {
    method: "POST",
    data: fd,
  });
}

export function toggleCommentLike({ commentId, userId }) {
  const fd = new FormData();
  fd.append("commentId", commentId);
  fd.append("userId", userId);
  return makeRequest(`/toggleCommentLike`, {
    method: "POST",
    data: fd,
  });
}
