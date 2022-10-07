import Layout from "../components/layout";
import Head from "next/head";
import { PORTFOLIO_ID, TOKEN } from "../config";
import PortfolioList from "../components/lists/portfolio-list";


export default function portfolio({ portfolio }) {
  
  return (
    <>
      <Layout>
        <Head>
          <title>웅비의 포트폴리오</title>
          <meta name="description" content="웅비의 블로그" />
        </Head>
        <div className="grid xl:grid-cols-2 grid-cols-1 w-3/4 mx-auto gap-7">
          {portfolio.results.map((item) => (
            <PortfolioList data={item} key={item.id} />
          ))}
        </div>
      </Layout>
    </>
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
    `https://api.notion.com/v1/databases/${PORTFOLIO_ID}/query`,
    options
  );

  const portfolio = await res.json();

  return {
    props: { portfolio },
  };
}
