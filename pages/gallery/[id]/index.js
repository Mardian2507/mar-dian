import CardPost from "components/CardPost";
import { useRouter } from "next/router";
import { useState } from "react";
import mockPosts from "/utils/posts.json";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [posts, setPost] = useState(mockPosts);

  return (
    <div>
      <p>Post: {id}</p>
      <CardPost />
      <p>sssssss</p>
      <div className="grid grid-cols-3 gap-1 lg:grid-cols-5 lg:gap-2 mt-10 mb-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-1 shadow-xl rounded-md hover:scale-105 ease-in duration-300"
          >
            <CardPost {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
