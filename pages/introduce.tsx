import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, INTRODUCE } from "../config";
import { GetlistResult } from "../TypeScript/listType";

export default function introduce({ data }) {
  const page_block: GetlistResult = data.results;
  const introduce_file = page_block[8].file.file.url;

  
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
              {/* 이력서 파일 */}
              <div className="flex my-3">
                <div
                  className="flex flex-col hover:cursor-pointer gap-3"
                  onClick={() => window.open(`${introduce_file}`)}
                >
                  <div className="">
                    <p className="text-2xl">이력서</p>
                  </div>
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z" />
                    </svg>
                    <p className="text-xl">이력서 보기!</p>
                  </div>
                </div>
              </div>

              {/* 각오 */}
              <div className="">
                <p className="text-2xl">
                  {page_block[1].heading_2.rich_text[0].text.content}
                </p>
              </div>
              <div className="flex flex-col">
                {resolution.map((item, index) => (
                  <div
                    key={index}
                    className="my-1 flex p-4 text-lg bg-[#d4d4d2] dark:bg-[#252525]"
                  >
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
    `https://api.notion.com/v1/blocks/${INTRODUCE}/children?page_size=100`,
    blcokOptions
  );
  const data = await sibar.json();

  return {
    props: { data },
  };
}
