import type { NextPage } from 'next'
import Head from 'next/head'
import Preview from '../components/Preview'

const postTitles = [
  'The complete CSS guide for non-frontend developers',
  'Explaining base64'
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>wb's blog</title>
        <meta name="description" content="my site" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <section>
        {postTitles.map((title) => (
          <Preview
          key={title}
          title={title}
          />
        ))}
      </section>
    </>
  )
}

export default Home
