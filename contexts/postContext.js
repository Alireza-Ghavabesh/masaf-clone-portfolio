"use client";
import React, { useContext, useState, useMemo, useEffect } from "react";
import { useAsync } from "@/hooks/useAsync";
import { useParams } from "next/navigation";
import { getPost } from "@/services/posts";

const Context = React.createContext();

export function usePost() {
  return useContext(Context);
}

export function PostProvider({ children }) {
  const params = useParams();
  const {
    loading,
    error,
    value: post,
  } = useAsync(() => getPost(params.postId), [params.postId]);
  const id = params.postId;

  const [comments, setComments] = useState([]);
  const commentsByParentId = useMemo(() => {
    const group = {};
    comments.forEach((comment) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });
    return group;
  }, [comments]);

  useEffect(() => {
    if (post?.comments == null) return;
    setComments(post.comments);
  }, [post?.comments]);

  function getReplies(parentId) {
    return commentsByParentId[parentId];
  }

  function createLocalComment(comment) {
    console.log(comment);
    setComments((prevComments) => {
      return [comment, ...prevComments];
    });
  }

  return (
    <>
      {post && (
        <Context.Provider
          value={{
            post: {
              id,
              ...post,
            },
            getReplies,
            rootComments: commentsByParentId[null],
            createLocalComment,
          }}
        >
          {children}
        </Context.Provider>
      )}
    </>
  );
}
