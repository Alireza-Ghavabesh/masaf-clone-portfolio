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
