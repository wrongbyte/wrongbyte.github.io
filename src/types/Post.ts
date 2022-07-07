import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface PostModel {
  title: string;
  description: string;
  date: Date;
  slug: string;
  source: MDXRemoteSerializeResult;
}
