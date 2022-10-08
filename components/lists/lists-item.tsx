import Image from "next/image";
import { useState } from "react";
import { GetlistResult } from "../../TypeScript/listType";
import ListModal from "../modal/list-modal";

export default function ListsItem({ data }) {
  const notion: GetlistResult = data;
  const listTitle = notion.properties.이름.title[0]?.plain_text || "제목 없음";
  const created_time = notion.created_time.split("T");
  const last_edited_time = notion.last_edited_time.split("T");
  const notion_cover_img = notion.cover.file?.url || notion.cover.external.url;
  const tag = notion.properties.태그.multi_select;
  const emoji = notion.icon?.emoji;
  const file_emoji = notion.icon?.file?.url;
  const notion_url = notion.url;
  const description = notion.properties.Description.rich_text[0]?.plain_text;

  const [modal, setModal] = useState(false);

  const loadModal = () => {
    setModal(!modal);
  };

  return (
    <div onClick={loadModal}>
      {modal === true ? (
        <ListModal
          listTitle={listTitle}
          emoji={emoji}
          file_emoji={file_emoji}
          notion_url={notion_url}
          description={description}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col dark:bg-[#121212] p-3 bg-[#dee2e6] mt-3 rounded-md hover:scale-105 h-full shadow-xl">
        <Image
          width="500px"
          height="500px"
          src={notion_cover_img}
          alt="Cover Image"
        />
        <p className="text-xl">
          {emoji === undefined ? (
            file_emoji !== undefined ? (
              <Image width="20px" height="20px" src={file_emoji} />
            ) : (
              ""
            )
          ) : (
            emoji
          )}
          {listTitle}
        </p>
        <p>생성 시간 : {created_time[0]}</p>
        <p>최종 수정 시간 : {last_edited_time[0]}</p>

        <div className="flex items-start mt-2">
          {tag.map((tags) => (
            <p
              key={tags.id}
              className={`p-1 sm:p-2 mr-2 sm:text-base text-sm rounded-md bg-blue-400`}
            >
              {tags.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
