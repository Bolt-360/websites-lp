import { notFound } from 'next/navigation';

import { getAllPosts, getPostById } from 'src/utils/get-posts';

import CareerPostView from 'src/sections/_career/view/career-post-view';

type Props = {
  params: {
    id: string;
  };
};

export default function CareerPostPage({ params }: Props) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return <CareerPostView post={post} />;
}

// Gerar as rotas estáticas no build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
} 