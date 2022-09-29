import { TOKEN,DATABASE_ID } from "../config";

//빌드 타임때 호출 가져온 다음에 화면에 랜더링 시킨다.
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
  
  const result = await res.json
  console.log("hi");
  console.log(result)

  return {
    props: {},// will be passed to the page component as props
  }
}