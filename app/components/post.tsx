'use client';

import { getPost } from "api/posts";
import { useQuery } from '@tanstack/react-query';

const Post = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
    staleTime: 1000 * 60
  });

  return (
    <div>
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.body}</div>
    </div>
  )
}

export default Post;
