"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import GridSingleVideo from "@/components/singleVideo/gridSingleVideo";

export type postStateType = {
  postThumbnail: string;
  id: number;
  title: string;
  content: string;
  jalaliDate: string;
  score: string;
  category: string;
  userId: number;
};

function MyPostsPage({ params }: { params: { userId: string } }) {
  const [posts, setPosts] = useState<postStateType[]>([]);

  useEffect(() => {
    async function getUserPosts() {
      const fd = new FormData();

      console.log(params.userId);

      fd.append("userId", params.userId);

      const res = await fetch("http://localhost:8000/api/getPost", {
        method: "POST",
        body: fd,
      });

      const posts = await res.json();
      console.log(posts);
      setPosts(() => posts);
    }
    getUserPosts();
  }, []);

  const { data: session, status } = useSession();
  return (
    <div className="container mx-auto px-6">
      <div className="flex lg:gap-2 lg:flex-row-reverse flex-col">
        <div className="mt-10 w-full">
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 && posts.map((post, postIndex) => (
              <GridSingleVideo
                src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
                href={`/content/${post.id}`}
                desc={post.content}
                date={post.jalaliDate}
                isAdmin={session?.user.isAdmin as boolean}
                category={post.category}
                postId={post.id}
                authorId={post.userId}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPostsPage;
