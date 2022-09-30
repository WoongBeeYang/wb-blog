import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import myPhoto from "../image/myPhoto.jpeg";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>웅비의 블로그</title>
        <meta name="description" content="웅비의 블로그" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mx-auto mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={myPhoto}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-18 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              멋있는 제목 추천좀
            </h1>
            <p className="mb-8 leading-relaxed break-all">
              제목에 어울리는 간단한 글 추천좀 씨이발...
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                자기소개
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                포트폴리오
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
