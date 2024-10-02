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
import { useSession } from "next-auth/react";

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
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { data: session, status } = useSession();

  const { handleSubmit, register } = useForm<FormFields>();

  // Define the initial state based on your ZodSchema
  const [formData, setFormData] = useState<{
    title: string;
    content: string;
    category: string;
    videos: {
      thumbnail: File;
      file: File | null;
      audios: File[] | null;
    }[]
    | null;
    images: FileList[] | null;
  }>({
    title: "",
    content: "",
    category: "",
    videos: [],
    images: [],
  });

  const onSubmit = async (data: FormFields) => {
    setIsSubmiting(() => true);
    const fd = new FormData();

    fd.append("userid", session?.user.id as string);
    fd.append("title", data.title);
    fd.append("content", data.content);
    fd.append("category", formData.category);

    console.log(data.title);
    console.log(data.content);
    console.log(formData.category);

    // for (var pair of fd.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    // Append each video object and related files
    if (formData.videos) {
      formData.videos.forEach((video, index) => {
        fd.append(`videos[${index}][thumbnail]`, video.thumbnail as any);
        fd.append(`videos[${index}][file]`, video.file as any);
        if (video.audios) {
          video.audios.forEach((audioFile, audioIndex) => {
            fd.append(
              `videos[${index}][audios][${audioIndex}]`,
              audioFile as any
            );
          });
        }
      });
    }

    if (formData.images) {
      formData.images.forEach((image, index) => {
        fd.append(`images[${index}]`, image as any);
      });
    }

    console.log(formData.videos?.forEach(video => {
      console.log(video.thumbnail)
    }))

    const response = await fetch(`http://localhost:8000/api/post`, {
      method: "POST",
      body: fd,
      cache: "no-cache", // Optional for caching control,
    });

    const res = await response.json();
    setIsSubmiting(() => false);
    console.log(res);
  };

  const handleAddNewVideoInput = () => {
    const newVideo = {
      file: null,
      audios: [],
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      videos: [...(prevFormData.videos as any), newVideo as any],
    }));
  };

  const handleAddNewAudio = (videoIndex: number) => {
    setFormData((prevData) => {
      const updatedVideos = [...(prevData.videos as any)];

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
      const updatedVideos = [...(prevData.videos as any)];
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
      const updatedVideos = [...(prevData.videos as any)];

      updatedVideos.splice(videoIndex, 1);

      return {
        ...prevData,
        videos: updatedVideos,
      };
    });
  };

  return (
    <form
      className="flex flex-col gap-2 px-2 space-y-1 w-full md:w-1/2"
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
        className="border-2 outline-none px-2 rounded-lg h-64"
        {...register("content")}
      />
      <select name="select" key={"select_key"} id="select_id" title="choose_category" onChange={(e) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            category: e.target.value,
          }));
          console.log(e.target.value);
        }}
      >
        <option key={"option"} value="">
          انتخاب دسته
        </option>
        {categorys.map((category, indexCategory) => (
          <option key={indexCategory} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div
        onClick={handleAddNewVideoInput}
        className="cursor-pointer whitespace-nowrap rounded-lg px-1 py-2 border flex gap-2 items-center"
      >
        <FontAwesomeIcon icon={faPlusCircle} size="2xl" onClick={() => { }} />
        <div>اضافه کردن ویدیو</div>
      </div>



      {formData.videos &&
        formData.videos.map((video, videoIndex) => (
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
                onClick={() => { }}
              />
            </button>
            <div
              key={videoIndex}
              className="flex gap-2 items-center border-t border-b px-2"
            >
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2xl"
                onClick={() => { }}
              />
              <div className="flex flex-col gap-2">
                <div className="cursor-pointer p-2 rounded-lg relative hover:bg-lime-200">
                  <div className="">انتخاب ویدیو</div>
                  <input
                    type="file"
                    onInput={(e: any) => {
                      const file = e.target.files[0];
                      setFormData((prevData) => {
                        const updatedVideos = [...(prevData.videos as any)];

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
            </div>
            <div
              key={`thumbnail-${videoIndex}`}
              className="flex gap-2 items-center border-t border-b px-2"
            >
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2xl"
                onClick={() => { }}
              />
              <div className="flex flex-col gap-2">
                <div className="cursor-pointer p-2 rounded-lg relative hover:bg-lime-200">
                  <div className="">انتخاب تامنیل ویدیو (پوستر)</div>
                  <input
                    type="file"
                    onInput={(e: any) => {
                      const file = e.target.files[0];
                      setFormData((prevData) => {
                        const updatedVideos = [...(prevData.videos as any)];

                        updatedVideos[videoIndex] = {
                          ...updatedVideos[videoIndex],
                          thumbnail: file,
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
            </div>
            <div
              onClick={() => handleAddNewAudio(videoIndex)}
              className="cursor-pointer whitespace-nowrap px-1 py-2 border-t border-b flex gap-2 items-center"
            >
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="2xl"
                onClick={() => { }}
              />
              <div>اضافه کردن صوت</div>
            </div>
            {video.audios &&
              video.audios.map((audio, audioIndex) => (
                <div key={audioIndex} className="flex flex-col gap-2">
                  <div
                    key={audioIndex}
                    className="flex justify-between gap-2 items-center border-2 mt-2 border-t border-b p-2 rounded-lg border-green-300"
                  >
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        size="2xl"
                        onClick={() => { }}
                      />

                      <div className="cursor-pointer p-2 justify-between rounded-lg relative hover:bg-lime-200 ">
                        <div className="">انتخاب صوت</div>
                        <input
                          type="file"
                          className="absolute opacity-0 w-full top-0 h-full "
                          onInput={(e: any) => {
                            const updatedVideos = [...(formData.videos as any)];
                            const specificVideo = updatedVideos[videoIndex];
                            const audioFile = e.target.files[0];
                            specificVideo.audios[audioIndex] = audioFile;
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
                        onClick={() => { }}
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}

      <div className="flex justify-between gap-2 items-center border-t border-b px-2">
        <div className="flex gap-2">
          <FontAwesomeIcon
            icon={faImages}
            className="mt-1"
            size="2xl"
            onClick={() => { }}
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
                  images: Array.from(files),
                }));
              }}
            />
          </div>
        </div>
      </div>
      <input
        className="border h-12 text-2xl hover:cursor-pointer hover:border-zomorod"
        type="submit"
        value={`${isSubmiting ? "درحال ارسال..." : "ثبت"}`}
        disabled={isSubmiting}
      />
    </form>
  );
}

export default UploadVideo;
