"use client";
import React, { useContext, useState, useMemo, useEffect } from "react";
import { useAsync } from "@/hooks/useAsync";
import { useParams } from "next/navigation";
import { getPost } from "@/services/posts";
import { useSession } from "next-auth/react";

const Context = React.createContext();

export function usePost() {
  return useContext(Context);
}

export function PostProvider({ children }) {
  const params = useParams();
  const { data: session, status } = useSession();

  // if user authenticated => getPost with userId
  // if user is not authenticated => getPost without userId

  const {
    loading,
    error,
    value: post,
  } = useAsync(
    () => getPost({ postId: params.postId, userId: session?.user.id }),
    [params.postId, session?.user.id]
  );
  console.log(status);
  const id = params.postId;

  const [comments, setComments] = useState([]);
  const [favorites, setFavorites] = useState([]);
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

    if (post?.favorites == null) return;
    setFavorites(post.favorites);
    
  }, [post?.comments, post?.favorites]);

  function getReplies(parentId) {
    return commentsByParentId[parentId];
  }

  function createLocalComment(comment) {
    setComments((prevComments) => {
      return [comment, ...prevComments];
    });
  }

  function updateLocalComment(commentId, text) {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, text: text };
        } else {
          return comment;
        }
      });
    });
  }

  function deleteLocalComment(commentId) {
    setComments((prevComments) => {
      return prevComments.filter((comment) => comment.id != commentId);
    });
  }

  function toggleLocalCommentLike(commentId, addLike) {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (commentId == comment.id) {
          if (addLike) {
            return {
              ...comment,
              likeCount: comment.likeCount + 1,
              likedByMe: true,
            };
          } else {
            return {
              ...comment,
              likeCount: comment.likeCount - 1,
              likedByMe: false,
            };
          }
        } else {
          return comment;
        }
      });
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
            updateLocalComment,
            deleteLocalComment,
            toggleLocalCommentLike,
          }}
        >
          {children}
        </Context.Provider>
      )}
    </>
  );
}
