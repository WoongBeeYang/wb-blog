import Image from "next/image";
import { GetlistResult } from "../../TypeScript/listType"; 
import { Result } from "../../TypeScript/quickType";

export default function ListsItem({ data }) {
  const notion:GetlistResult = data
  const listTitle = notion.properties.이름.title[0].plain_text;
  const last_edited_time = notion.last_edited_time.split("T");
  const notion_cover_img = notion.cover.file?.url|| notion.cover.external.url
  const tag = notion.properties.태그.multi_select[0]?.name
  
  return (
    <div className="flex flex-col p-6 dark:bg-slate-400 bg-blue-300 mt-3 rounded-md">
      <Image width="100%" height="60%" src={notion_cover_img}/>
      <h1 className="text-xl">제목 : {listTitle}</h1>
      <h1>생성 시간 : </h1>
      <h1>최종 수정 시간 : {last_edited_time[0]}</h1>
      <h1 >{tag}</h1>
    </div>
  );
}
