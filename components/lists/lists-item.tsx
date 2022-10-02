import Image from "next/image";
import { GetlistResult } from "../../TypeScript/listType"; 

export default function ListsItem({ data }) {
  const listTitle = data.properties.이름.title[0].plain_text;
  const last_edited_time = data.last_edited_time.split("T");
  const cover_img = data.cover.external.url;
  const tag = data.properties.태그.multi_select.name

  console.log(tag)
  return (
    <div className="flex flex-col p-6 bg-slate-400 mt-3 rounded-md">
      <img className="w-full h-[300px]" src={cover_img}/>
      <h1 className="text-xl">제목 : {listTitle}</h1>
      <h1>최종 수정 시간 : {last_edited_time[0]}</h1>
      <p>{tag}</p>
      
    </div>
  );
}
