import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN,DATABASE_ID } from "../config";

export default function List({notion}){
  return(
    <Layout>
      <Head>
        <title>필기 내용</title>
        <meta name="description" content="웅비의 블로그" />
      </Head>
      <div>
        <h1 className="float-right mr-3 mt-3">총 글수 : {notion.results.length}</h1>

        {notion.results.map((notion) => (
          <p>{notion.properties.이름.title[0].plain_text}</p>
        ))}

      </div>
    </Layout>
  );
}

//빌드 시간에 호출(딱 한번)
export async function getStaticProps() {
  
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }, 
    body: JSON.stringify({page_size: 100})
  };
  
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  
  const notion = await res.json()
  
  const projectIds = notion.results.map((notion) => (
    notion.properties.이름.title[0].plain_text
  ))

  
  return {
    props: {notion},
  }
}