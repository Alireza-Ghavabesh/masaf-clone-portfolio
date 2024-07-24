import { makeRequest } from "./makeRequest";

export function getPosts() {
  return makeRequest("/allPosts", {
    method: "POST",
  });
}

export function getPost(id) {
  const fd = new FormData();
  fd.append("postId", id);
  return makeRequest(`/singlePost`, {
    method: "POST",
    data: fd,
  });
}
