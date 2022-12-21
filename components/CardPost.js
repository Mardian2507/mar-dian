import Image from "next/image";
import PostCaption from "./PostCaption";

export default function CardPost({ thumbnail, ...postCaption }) {
  return (
    <>
      <Image
        alt="postingan"
        src={thumbnail}
        width="200"
        height="300"
        className="m-auto"
      />
      <PostCaption {...postCaption} />
    </>
  );
}
