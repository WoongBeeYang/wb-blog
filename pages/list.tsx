import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ListsItem from "../components/lists/lists-item";
import { Getlist, GetlistResult } from "../TypeScript/listType";

export default function List({ notion }) {
  const data: Getlist = notion;

  return (
    <Layout>
      <Head>
        <title>필기 내용</title>
        <meta name="description" content="웅비의 블로그" />
      </Head>
      <p className="text-4xl text-center my-5 font-bold text-black dark:text-white">
        필기 내용
      </p>

      <div className="grid xl:grid-cols-2 grid-cols-1 w-3/4 mx-auto gap-7">
        {data.results.map((notion: GetlistResult) => (
          <ListsItem data={notion} key={notion.id} />
        ))}
      </div>
    </Layout>
  );
}

//빌드 시간에 호출(딱 한번)
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const notion: Getlist = await res.json();

  return {
    props: { notion },
  };
}
