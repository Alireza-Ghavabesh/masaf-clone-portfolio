"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SingleSocialVideo from "../singleVideo/singleSocialVideo";
import { Suspense } from "react";

// Import Swiper styles
import "swiper/css";

function SocialSlider() {
  return (
    <Suspense fallback={<></>}>
      <div className="container mx-auto px-4 bg-black">
        <Swiper
          spaceBetween={60}
          slidesPerView={3} // Change this to 1
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <SingleSocialVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
              iconSrc={
                "https://cdn.masaf.ir/portal/media/image/IMG_20230916_232959_243.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSocialVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
              iconSrc={
                "https://cdn.masaf.ir/portal/media/image/IMG_20230916_232959_243.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSocialVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
              iconSrc={
                "https://cdn.masaf.ir/portal/media/image/IMG_20230916_232959_243.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSocialVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
              iconSrc={
                "https://cdn.masaf.ir/portal/media/image/IMG_20230916_232959_243.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSocialVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
              iconSrc={
                "https://cdn.masaf.ir/portal/media/image/IMG_20230916_232959_243.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSocialVideo
              src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
              href="/content/10"
              desc={
                "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
              }
              date={"1402/08/03"}
              iconSrc={
                "https://cdn.masaf.ir/portal/media/image/IMG_20230916_232959_243.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Suspense>
  );
}

export default SocialSlider;
