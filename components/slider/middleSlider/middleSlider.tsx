"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SingleVideo from "../../singleVideo/singleVideo";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import { postStateType } from "@/app/dashboard/myPosts/[userId]/page";

function MiddleSlider({ category, limit }: { category: string, limit: string }) {
  const [posts, setPosts] = useState<postStateType[]>([]);
  useEffect(() => {
    async function getPosts() {
      const fd = new FormData();

      fd.append(`categories[0]`, category);
      fd.append('limit', limit);
      

      const res = await fetch("http://localhost:8000/api/getPost", {
        body: fd,
        method: "POST",
      });

      const posts = await res.json();
      setPosts(() => posts)
      console.log(`posts middleslider:`);
      console.log(posts)
    }


    getPosts();
  }, []);
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={60}
        slidesPerView={3} // Change this to 1
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {posts.map(post => (
          <SwiperSlide>
            <SingleVideo
              src={`http://localhost:8000/stream/thumbnail/${post.postThumbnail}`}
              href={`/content/${post.id}`}
              desc={
                post.content
              }
              date={post.jalaliDate}
              title={post.title}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default MiddleSlider;
