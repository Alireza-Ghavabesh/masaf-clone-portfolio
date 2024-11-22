import Image from "next/image";
import { delaySimulator } from "@/utils/utils";

async function ImageWithLoading({
  src,
  alt,
  width,
  height,
  loadingTime,
  className,
  loading,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  loadingTime?: number;
  className?: string;
  loading?: "lazy" | "eager" | undefined;
}) {
  if (loadingTime) {
    // await delaySimulator(loadingTime);
  }
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className}`}
        loading={loading}
      />
    </>
  );
}

export default ImageWithLoading;
