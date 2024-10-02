import { makeRequest } from "./makeRequest";

export function getPosts() {
  return makeRequest("/allPosts", {
    method: "POST",
  });
}

export function getPost({ postId, userId, status }) {
  const fd = new FormData();
  fd.append("postId", postId);
  fd.append("userId", userId);

  return makeRequest(`/singlePost`, {
    method: "POST",
    data: fd,
  });
}


export function addToFavoritePost({postId, userId}) {
  const fd = new FormData();
  fd.append("postId", postId);
  fd.append("userId", userId);
  return makeRequest(`/addToFavorite`, {
    method: "POST",
    data: fd,
  });
}
