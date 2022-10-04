import Image from "next/image";
import { useState } from "react";
import { TOKEN } from "../../config";
import { GetlistResult } from "../../TypeScript/listType";
import Modal from "../modal";

export default function ListsItem({ data, page_data }) {
  const notion: GetlistResult = data;
  const listTitle = notion.properties.이름.title[0]?.plain_text || "제목 없음";
  const created_time = notion.created_time.split("T");
  const last_edited_time = notion.last_edited_time.split("T");
  const notion_cover_img = notion.cover.file?.url || notion.cover.external.url;
  const tag = notion.properties.태그.multi_select;
  const emoji = notion.icon?.emoji
  const url = notion.url

  console.log(page_data)
  console.log(emoji)

  const [modal, setModal] = useState(false);

  const loadModal = () => {
    setModal(!modal);
  };

  return (
    <div onClick={loadModal}>
      {modal === true ? <Modal listTitle={listTitle} emoji={emoji} url={url}/> : ""}
      <div className="flex flex-col dark:bg-[#121212] p-3 bg-[#9F814F] mt-3 rounded-md hover:scale-105 h-full shadow-xl">
        <Image
          width="500px"
          height="700px"
          src={notion_cover_img}
          alt="Cover Image"
        />
        <span className="text-xl">{listTitle}</span>
        <span>생성 시간 : {created_time[0]}</span>
        <span>최종 수정 시간 : {last_edited_time[0]}</span>
        <div className="flex items-start mt-2">
          {tag.map((tags) => (
            <span
              key={tags.id}
              className="px-2 py-1 mr-2 rounded-md bg-sky-400"
            >
              {tags.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps({url}) {
  console.log(url)
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const res = await fetch(
    `https://api.notion.com/v1/blocks/${url}/children?page_size=100`,
    options
  )
  const page_data = await res.json();
  console.log(page_data)

  return {
    props:{page_data},
  }
}
