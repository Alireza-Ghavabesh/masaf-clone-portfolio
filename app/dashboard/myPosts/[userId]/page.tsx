"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react';
import GridSingleVideo from '@/components/singleVideo/gridSingleVideo';
import { getNestjsServerAdress } from '@/utils/utils';
import { postType } from '@/components.types';



function MyPosts() {

  const cursorRef = useRef(null);
  const limitRef = useRef(9);
  const [isLoading, setIsloading] = useState(false)
  const [posts, setPosts] = useState<postType[]>([]);
  const { data: session, status } = useSession();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState<"mostPopular" | "oldest" | "newest">(
    "oldest"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchPosts = async (url: string, filter: {
    cursor?: string, limit?: string, tags?: string[], orderBy?: string, searchTerm?: string, isForNextPart: boolean, category?: string,
    filterFromDate?: string, filterToDate?: string, userId?: string,
  }) => {
    setIsloading(true);
    try {
      // await new Promise(res => setTimeout(res, 1000))

      const fd = new FormData();

      if (filter.userId) {
        fd.append('userId', filter.userId)
      }

      if (filter.tags) {
        if (filter.tags.length > 0) {
          filter.tags.forEach((tag, tagIndex) => {
            fd.append(`tags[${tagIndex}]`, tag);
          });
        }
      }

      if (filter.orderBy) {
        fd.append("orderBy", orderBy);
      }
      if (searchTerm) {
        fd.append("searchTerm", searchTerm);
      }

      if (filter.limit) {
        fd.append("limit", JSON.stringify(limitRef.current))
      }

      if (filter.cursor) {
        fd.append("cursor", JSON.stringify(cursorRef.current))
      }

      if (filter.category) {
        fd.append('category', filter.category)
      }


      const response = await fetch(url, {
        method: "POST",
        body: fd
      });
      const data = await response.json();

      console.log(`<the response data for ${selectedTags.length > 0 ? selectedTags[0] : ""}:`)
      console.log(data)
      console.log("<the response data>:")



      if (filter.isForNextPart) {
        setPosts(prevPosts => [...prevPosts, ...data]);
      } else {
        setPosts(() => [...data]);
      }



      // Update the cursor to the ID of the last fetched post
      if (data.length > 0) {
        cursorRef.current = data[data.length - 1].id;
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsloading(false);
    }

  };

  const postRef = useCallback((post: any) => {
    if (post == null) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // TODO: load next posts
        fetchPosts(`${getNestjsServerAdress()}/api/postsByCursor`, {
          cursor: JSON.stringify(cursorRef.current),
          limit: JSON.stringify(limitRef.current),
          orderBy: orderBy,
          isForNextPart: true,
        });
        console.log("last post shown")
        observer.unobserve(post)
      }
    })
    observer.observe(post)
  }, [cursorRef.current, selectedTags, searchTerm, limitRef.current])


  // Send request to server whenever filters change
  useEffect(() => {
    console.log(`selectedTags================`)
    console.log(selectedTags)
    console.log(`selectedTags================`)

    fetchPosts(`${getNestjsServerAdress()}/api/postsByCursor`, {
      limit: JSON.stringify(limitRef.current),
      isForNextPart: false,
      orderBy: orderBy,
    })

    console.log(selectedTags)

  }, [orderBy, selectedTags, searchTerm, limitRef.current]);




  return (
    <div>
      <div className='text-4xl'>مورد علاقه ها</div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 &&
          posts.map((post, postIndex) => (
            <GridSingleVideo
              key={post.id}
              src={`${getNestjsServerAdress()}/stream/thumbnail/${post.postThumbnail}`}
              href={`/content/${post.id}`}
              content={post.content}
              date={post.jalaliDate}
              isAdmin={session?.user.isAdmin}
              category={post.category}
              postId={post.id}
              authorId={post.userId}
              title={post.title}
              ref={postIndex === posts.length - 1 ? postRef : undefined}
              tags={[
                "دشمن شناسی",
                "سیاسی",
                "رسانه",
                "روایت عهد",
              ]}
            />
          ))}

      </div>
    </div>
  )
}

export default MyPosts