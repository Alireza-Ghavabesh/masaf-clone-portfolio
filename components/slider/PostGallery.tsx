"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


type PostGalleryProps = {
    imageUrls: {url: string}[]
}

// Import Swiper styles
import "swiper/css";

async function PostGallery(props: PostGalleryProps) {
  // await delaySimulator(5000);
  return (
    <div className="container mx-auto mt-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1} // Change this to 1
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.imageUrls.map((imageUrl) => (
          <SwiperSlide>
            <Image
              src={imageUrl.url}
              alt=""
              width={9000}
              height={500}
              className="rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PostGallery;
