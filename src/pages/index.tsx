import type { GetStaticProps } from 'next';
import type { PostPreview } from '../types/PostPreview';
import Head from 'next/head';
import Preview from '../components/Preview';
import postList from '../lib/getPosts';

const Home = (postList: { posts: [PostPreview] }) => {
  return (
    <>
      <Head>
        <title>wb&#39;s blog</title>
        <meta name="description" content="my site" />
      </Head>
      <section>
        {postList.posts.map((post) => (
          <Preview
          key={post.title}
          description={post.description}
          title={post.title}
          date={post.date}
          slug={post.slug}
          />
        ))}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      posts: postList.map((post) => ({
        title: post.title,
        description: post.description,
        date: post.date.toDateString(),
        slug: post.slug
      }))
    }
  }
}

export default Home
