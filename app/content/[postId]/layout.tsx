import { ReactNode } from "react";
import { useAsync } from "@/hooks/useAsync";
import { getPost } from "@/services/posts";
import { PostProvider } from "@/contexts/postContext";
import './style.css'

type PostLayoutProps = {
  children: ReactNode;
  params: { postId: string };
};

const PostLayout: React.FC<PostLayoutProps> = ({ children }) => {
  return (
    <>
      <PostProvider>{children}</PostProvider>
    </>
  );
};

export default PostLayout;
