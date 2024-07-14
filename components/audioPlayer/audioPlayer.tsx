"use client";
import ReactAudioPlayer from "react-audio-player";

function AudioPlayer({ src, className }: { src: string; className?: string }) {
  return <ReactAudioPlayer src={src} controls className={className} autoPlay={false} />;
}

export default AudioPlayer;
