import { IBlogPostProps } from 'src/types/blog';

import postsData from '../data/blog-posts.json';

export function getAllPosts(): IBlogPostProps[] {
  return postsData.posts;
}

export function getPostById(id: string): IBlogPostProps | undefined {
  return postsData.posts.find((post) => post.id === id);
} 