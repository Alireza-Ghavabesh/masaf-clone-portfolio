"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import heroImage from "@/public/hero.webp";

// Import Swiper styles
import "swiper/css";
import { delaySimulator } from "@/utils/utils";

async function HeroSlider() {
  // await delaySimulator(5000);
  return (
    <div className="container mx-auto mt-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1} // Change this to 1
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            src={heroImage}
            alt=""
            width={9000}
            height={500}
            className="rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
