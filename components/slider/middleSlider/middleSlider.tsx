"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SingleVideo from "../../singleVideo/singleVideo";

// Import Swiper styles
import "swiper/css";

function MiddleSlider() {
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
        <SwiperSlide>
          <SingleVideo
            src={"https://cdn.masaf.ir/contents/media/coverImage/55.jpg"}
            href="/content/10"
            desc={
              "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
            }
            date={"1402/08/03"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleVideo
            src={
              "https://cdn.masaf.ir/survey/f23f4970-0f2f-49d9-b2a4-5e1e9d7f2504_SL"
            }
            href="/content/10"
            desc={
              "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
            }
            date={"1402/08/03"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleVideo
            src={
              "https://cdn.masaf.ir/contents/media/coverImage/%DA%A9%D8%A7%D9%88%D8%B1_%D9%85%D8%B1%D8%A7%D8%B3%D9%85_%D8%AF%D8%B9%D8%A7%DB%8C_%D9%86%D8%AF%D8%A8%D9%87_35.jpg"
            }
            date={"1402/08/03"}
            href="/content/10"
            desc={
              "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleVideo
            src={
              "https://cdn.masaf.ir/survey/f23f4970-0f2f-49d9-b2a4-5e1e9d7f2504_SL"
            }
            date={"1402/08/03"}
            href="/content/10"
            desc={
              "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleVideo
            src={
              "https://cdn.masaf.ir/survey/f23f4970-0f2f-49d9-b2a4-5e1e9d7f2504_SL"
            }
            date={"1402/08/03"}
            href="/content/10"
            desc={
              "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleVideo
            src={
              "https://cdn.masaf.ir/survey/f23f4970-0f2f-49d9-b2a4-5e1e9d7f2504_SL"
            }
            date={"1402/08/03"}
            desc={
              "سخنرانی استاد رائفی پور در اجتماع مردمی عاشقان مبارزه با اسرائیل"
            }
            href="/content/10"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MiddleSlider;
