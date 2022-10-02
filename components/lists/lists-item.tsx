import { GetlistResult } from "../../TypeScript/listType"; 

export default function ListsItem({ data }) {
  console.log(data)
  const notion:GetlistResult = data
  const listTitle = notion.properties.이름.title[0].plain_text;
  const last_edited_time = notion.last_edited_time.split("T");
  const cover_img = notion.cover.external.url;
  const tag = notion.properties.태그.multi_select[0]
  let tagName = ""

  if(typeof(tag) !== "undefined") {
     tagName = tag.name
  }
  
  
  

  
  return (
    <div className="flex flex-col p-6 dark:bg-slate-400 bg-blue-300 mt-3 rounded-md">
      <img className="w-full h-[300px]" src={cover_img}/>
      <h1 className="text-xl">제목 : {listTitle}</h1>
      <h1>최종 수정 시간 : {last_edited_time[0]}</h1>
      <h1 >{tagName === "" ? "" : tagName}</h1>
      
      
    </div>
  );
}
