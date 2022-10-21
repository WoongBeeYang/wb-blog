import { TOKEN } from "../config";
import { GetlistResult } from "../TypeScript/listType";

export default function blocklist({data, haha}) {
  
  const notion_block:GetlistResult = haha.results
  console.log(notion_block);
  
  return(
    <>
    
    </>
  )
}

export async function getStaticProps({}){
  
  const blcokOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      authorization: `Bearer ${TOKEN}`,
    },
    
  };
  const sibar = await fetch(`https://api.notion.com/v1/blocks/f8722fcadb444a3fb0fea7cb86d9c763/children?page_size=100`, blcokOptions);
  const haha = await sibar.json();
  
  return {
    props: {haha}
  }
}