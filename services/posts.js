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


export function addToFavoritePost({ postId, userId }) {
  const fd = new FormData();
  fd.append("postId", postId);
  fd.append("userId", userId);
  return makeRequest(`/addToFavorite`, {
    method: "POST",
    data: fd,
  });
}


export function updateTopSiteBannerUrl({ topSiteBanner } = {}) {
  const fd = new FormData();
  if (topSiteBanner) fd.append("topSiteBanner", topSiteBanner);

  return makeRequest(`/updateTopSiteBanner`, {
    method: "POST",
    data: fd,
  });
}

export function updateBottomLeftSiteBannerUrl({ bottomLeftSiteBanner } = {}) {
  const fd = new FormData();
  if (bottomLeftSiteBanner) fd.append("bottomLeftSiteBanner", bottomLeftSiteBanner);

  return makeRequest(`/updateBottomLeftSiteBanner`, {
    method: "POST",
    data: fd,
  });
}

export function updateMidSiteBannerUrl({ midSiteBanner } = {}) {
  const fd = new FormData();
  if (midSiteBanner) fd.append("midSiteBanner", midSiteBanner);

  return makeRequest(`/updateMidSiteBanner`, {
    method: "POST",
    data: fd,
  });
}

export function updateBottomRightSiteBannerUrl({ bottomRightSiteBanner } = {}) {
  const fd = new FormData();
  if (bottomRightSiteBanner) fd.append("bottomRightSiteBanner", bottomRightSiteBanner);

  return makeRequest(`/updateBottomRightSiteBanner`, {
    method: "POST",
    data: fd,
  });
}