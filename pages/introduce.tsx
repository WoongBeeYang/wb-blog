import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN } from "../config";
import { GetlistResult } from "../TypeScript/listType";

export default function introduce({ data }) {
  const page_block: GetlistResult = data.results;

  console.log(page_block);
  const resolution = [];

  for (let i = 2; i < 7; i++) {
    resolution[i] =
      page_block[i].callout.icon.emoji +
      "    " +
      page_block[i].callout.rich_text[0].plain_text;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>자기소개</title>
          <meta name="description" content="웅비의 블로그" />
        </Head>
        <div className="my-10">
          <div className="flex mx-auto p-5 border md:w-[1000px] w-auto">
            <div className="p-3 ml-5">
              {/* 각오 */}
              <div className="">
                <p className="text-2xl">
                  {page_block[1].heading_2.rich_text[0].text.content}
                </p>
              </div>
              <div className="flex flex-col">
                {resolution.map((item, index) => (
                  <div key={index} className="my-1 flex p-4 text-lg bg-[#d4d4d2] dark:bg-[#252525]">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({}) {
  const blcokOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      authorization: `Bearer ${TOKEN}`,
    },
  };
  const sibar = await fetch(
    `https://api.notion.com/v1/blocks/ccb151f7fbcf409985ba1ab526ce4a3a/children?page_size=100`,
    blcokOptions
  );
  const data = await sibar.json();

  return {
    props: { data },
  };
}
