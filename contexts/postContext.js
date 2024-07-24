"use client";
import React, { useContext } from "react";
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
  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {post && (
        <Context.Provider
          value={{
            post: {
              id,
              ...post,
            },
          }}
        >
          {children}
        </Context.Provider>
      )}
    </>
  );
}
