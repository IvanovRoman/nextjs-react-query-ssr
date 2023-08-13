import { dehydrate, QueryClient } from '@tanstack/react-query';

import ReactQueryHydrate from 'components/hydrate-client';

import Post from 'components/post';

import { getPost } from 'api/posts';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id)
  });
  const dehydrateState = dehydrate(queryClient, { shouldDehydrateQuery: () => true });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactQueryHydrate state={dehydrateState}>
        <Post id={id} />
      </ReactQueryHydrate>
    </div>
  )
}
