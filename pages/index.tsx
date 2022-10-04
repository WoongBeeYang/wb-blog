import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import BigLogo from "../image/BigLogo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F5D08A]">
      <Layout>
        <Head>
          <title>웅비의 블로그</title>
          <meta name="description" content="웅비의 블로그" />
        </Head>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 mx-auto mb-10 md:mb-0 md:mr-20">
              <Image
                className="object-cover object-center rounded"
                alt="hero"
                src={BigLogo}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-18 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300">
                Premium IT Blog
              </h1>
              <p className="mb-8 leading-relaxed">
                Next.js, TypeScript, Notion API를 활용한 저만의 블로그 입니다.
              </p>
              <div className="flex justify-center">
                <Link href="/introduce">
                  <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    자기소개
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    포트폴리오
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
