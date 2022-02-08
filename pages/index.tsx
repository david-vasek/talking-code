import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>DevTalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex items-center justify-between rounded-xl border border-y border-gray-600 bg-gray-600 py-10 lg:py-10">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              TalkingCode
            </span>{' '}
            is a programmer's paradise
          </h1>
          <h2>
            A place to post your thoughts on any topic and connect with millions
            of other users.
          </h2>
        </div>

        <img
          className="hidden h-32 px-10 md:inline-flex lg:h-full lg:p-10"
          src="https://lh3.googleusercontent.com/29Uhu3m6rgM_jSiLIACFOuNT3HVUSvhhoBv4KQYlj51vOJoYYDa3AFdSGVpLxCv6cIAVv2kdIkxu24m9IZLy5wHUdkYKP6-WOWGvGyibR9oo_z0usmJMilfQGAa1vTbJkpz7wB3trL2vViaeWAD3p75aXy13P-L2i6xy_fouwfal1vMBM5eVAprGD2FYH30cp5jhiUe0BHvhICK-suZLs2n60n8xMw1woZFBU_cxTfL5_dvpHAjzOlpi6FPR46-swQqm918za_EaWjEyN4R-uWNaUCnsKWJmJxmcwHrttORsptvRKPwOPvI7WRY9557T9d22ELHqgyS-rw367wiqCKIdZUczfJ5r8G_TEfW_w68vZRj94JSozFEYo6VdfDQhF-kilRR5T86OZV26PbqLKLfdq5RtfEuc7ZHgI2GG3wn7TJhaHgMORriJk8KpPsyzogyiC5u4bF1DC6z8I3v0J69D_TYE1OcoN42rGeFpSjIp1A3uOzbU9BDgaoGCZUzq4ooBnIp4hvuqqH_9LvioUIT-YsF_U_JALlyukuY6eQSphF4YjNs3H4fowqNfl6NtrkYAurgLYx3jyZm6DWBqxyGe9ZagouyZ9mnbtuELdelSRm2pR4W7V3IeN07GF-SgF8Q10PK1FwBAZiA-sFdKPddBu7gPWiTgJgiqlxHzw-wuwiW-soJNZmhgJYY55K-qDii2iGq6s1svKdUS7PVemw=s256-no?authuser=0"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-xl border border-black">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  className="h-10 w-10 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
