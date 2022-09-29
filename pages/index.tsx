import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import myPhoto from "../image/myPhoto.jpeg"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>웅비의 블로그</title>
        <meta name="description" content="웅비의 블로그" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={myPhoto}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              개발자 하고싶다
            </h1>
            <p className="mb-8 leading-relaxed">
              개발자가 되고싶다
            </p>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}
