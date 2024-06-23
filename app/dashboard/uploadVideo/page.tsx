"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faPlusSquare,
  faImages,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";

const AudioSchema = z.object({
  file: z.unknown(), // Use 'unknown' type for File objects
});

const VideoSchema = z.object({
  file: z.unknown(), // Use 'unknown' type for File objects
  audios: z.array(AudioSchema),
});

const ZodSchema = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
  videos: z.array(VideoSchema),
  images: z.array(z.string()), // Optional image URLs or file paths
});

const categorys = [
  "سخنرانی",
  "کلیپ",
  "گالری مراسم",
  "نویسا",
  "توییت",
  "اطلاع رسانی",
];

type FormFields = z.infer<typeof ZodSchema>;

function UploadVideo() {
  const { handleSubmit, register } = useForm<FormFields>();

  // Define the initial state based on your ZodSchema
  const [formData, setFormData] = useState<FormFields>({
    title: "",
    content: "",
    category: "",
    videos: [],
    images: [],
  });

  const onSubmit = (data: FormFields) => {
    // Handle form submission

    const dataForSend = {
      title: data.title,
      content: data.content,
      category: formData.category,
      videos: formData.videos,
      images: formData.images,
    };
    console.log(dataForSend);
  };

  const handleAddNewVideoInput = () => {
    const newVideo = {
      url: "",
      audios: [],
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      videos: [...prevFormData.videos, newVideo],
    }));
  };

  const handleAddNewAudio = (videoIndex: number) => {
    setFormData((prevData) => {
      const updatedVideos = [...prevData.videos];
      updatedVideos[videoIndex] = {
        ...updatedVideos[videoIndex],
        audios: [...updatedVideos[videoIndex].audios, { file: null }],
      };

      return {
        ...prevData,
        videos: updatedVideos,
      };
    });
  };

  const removeChooseSoundByIndex = (videoIndex: number, audioIndex: number) => {
    setFormData((prevData) => {
      const updatedVideos = [...prevData.videos];
      const updatedAudios = [...updatedVideos[videoIndex].audios];

      // Remove the audio at the specified index
      updatedAudios.splice(audioIndex, 1);

      updatedVideos[videoIndex] = {
        ...updatedVideos[videoIndex],
        audios: updatedAudios,
      };

      return {
        ...prevData,
        videos: updatedVideos,
      };
    });
  };

  const removeChooseVideo = (videoIndex: number) => {
    setFormData((prevData) => {
      const updatedVideos = [...prevData.videos];

      updatedVideos.splice(videoIndex, 1);

      return {
        ...prevData,
        videos: updatedVideos,
      };
    });
  };

  return (
    <form
      className="flex flex-col gap-2 px-2 space-y-1 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-4xl p-1">ایجاد پست جدید</div>
      <input
        placeholder="عنوان پست"
        className="border-2 outline-none px-2 rounded-lg h-10"
        {...register("title")}
        type="text"
      />
      <textarea
        placeholder="متن پست"
        className="border-2 outline-none px-2 rounded-lg"
        {...register("content")}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            category: e.target.value,
          }));
          console.log(e.target.value);
        }}
      >
        <option value="">انتخاب دسته</option>
        {categorys.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>

      <div
        onClick={handleAddNewVideoInput}
        className="cursor-pointer whitespace-nowrap rounded-lg px-1 py-2 border flex gap-2 items-center"
      >
        <FontAwesomeIcon icon={faPlusCircle} size="2xl" onClick={() => {}} />
        <div>اضافه کردن ویدیو</div>
      </div>

      {formData.videos.map((video, videoIndex) => (
        <div className="p-2 border-2 border-blue-300 rounded-xl">
          <button
            className="mr-2"
            onClick={() => {
              removeChooseVideo(videoIndex);
            }}
          >
            <FontAwesomeIcon
              className=""
              icon={faRemove}
              size="2xl"
              onClick={() => {}}
            />
          </button>
          <div
            key={videoIndex}
            className="flex gap-2 items-center border-t border-b px-2"
          >
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="2xl"
              onClick={() => {}}
            />
            <div className="cursor-pointer p-2 rounded-lg relative hover:bg-lime-200">
              <div className="">انتخاب ویدیو</div>
              <input
                type="file"
                onInput={(e: any) => {
                  const file = e.target.files[0];
                  setFormData((prevData) => {
                    const updatedVideos = [...prevData.videos];

                    updatedVideos[videoIndex] = {
                      file: file,
                      audios: [],
                    };

                    return {
                      ...prevData,
                      videos: updatedVideos,
                    };
                  });
                }}
                className="absolute opacity-0 w-full top-0 h-full"
              />
            </div>
          </div>
          <div
            onClick={() => handleAddNewAudio(videoIndex)}
            className="cursor-pointer whitespace-nowrap px-1 py-2 border-t border-b flex gap-2 items-center"
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="2xl"
              onClick={() => {}}
            />
            <div>اضافه کردن صوت</div>
          </div>
          {video.audios.map((audio, audioIndex) => (
            <>
              <div
                key={audioIndex}
                className="flex justify-between gap-2 items-center border-t border-b px-2"
              >
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    size="2xl"
                    onClick={() => {}}
                  />

                  <div className="cursor-pointer p-2 justify-between rounded-lg relative hover:bg-lime-200">
                    <div className="">انتخاب صوت</div>
                    <input
                      type="file"
                      className="absolute opacity-0 w-full top-0 h-full"
                      onInput={(e: any) => {
                        const updatedVideos = [...formData.videos];
                        const specificVideo = updatedVideos[videoIndex];
                        const audioFile = e.target.files[0];
                        specificVideo.audios[audioIndex] = { file: audioFile };
                        // Update the state with the modified videos array
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          videos: updatedVideos,
                        }));
                      }}
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeChooseSoundByIndex(videoIndex, audioIndex);
                  }}
                >
                  <FontAwesomeIcon
                    className=""
                    icon={faRemove}
                    size="2xl"
                    onClick={() => {}}
                  />
                </button>
              </div>
            </>
          ))}
        </div>
      ))}

      <div className="flex justify-between gap-2 items-center border-t border-b px-2">
        <div className="flex gap-2">
          <FontAwesomeIcon
            icon={faImages}
            className="mt-1"
            size="2xl"
            onClick={() => {}}
          />

          <div className="cursor-pointer p-2 justify-between rounded-lg relative hover:bg-lime-200">
            <div className="">انتخاب گالری مراسم (اختیاری)</div>
            <input
            multiple
              type="file"
              className="absolute opacity-0 w-full top-0 h-full"
              onInput={(e: any) => {
                const files = e.target.files;
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  images: files
                }))
              }}
            />
          </div>
        </div>
      </div>
      <input className="border h-12 text-2xl" type="submit" value="ثبت" />
    </form>
  );
}

export default UploadVideo;
