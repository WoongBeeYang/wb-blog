import Image from "next/image";
import { useState } from "react";
import { GetlistResult } from "../../TypeScript/listType";
import PortfolioModal from "../modal/portfolio-modal";

export default function PortfolioList({ data }) {
  const notion: GetlistResult = data;
  const listTitle = notion.properties.이름.title[0]?.plain_text || "제목 없음";
  const description = notion.properties.Description.rich_text[0]?.plain_text;
  const gitHub = notion.properties.Github?.url || "";
  const youTube = notion.properties.Youtube?.url || "";
  const notion_cover_img = notion.cover.file?.url || notion.cover.external.url;
  const tag = notion.properties.태그.multi_select;
  const emoji = notion.icon?.emoji || notion.icon?.file.url;
  const [modal, setModal] = useState(false);

  const loadModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex">
      <div onClick={loadModal}>
        {modal === true ? (
          <PortfolioModal
            youTube={youTube}
            gitHub={gitHub}
            emoji={emoji}
            listTitle={listTitle}
            description={description}
          />
        ) : (
          ""
        )}
        <div className="flex flex-col dark:bg-[#121212] justify-center p-3 bg-[#dee2e6] my-3 rounded-md hover:scale-105 h-full shadow-xl">
          <Image
            width="900px"
            height="600px"
            src={notion_cover_img}
            alt="Cover Image"
          />
          <div className="my-1">
            <p className="text-2xl">
              {emoji} {listTitle}
            </p>
            <p className="sm:text-lg text-base mt-1">{description}</p>
          </div>
          <div className="sm:text-base text-sm">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>{" "}
              <p>{gitHub}</p>
            </div>

            <div className="flex mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mr-3"
              >
                <path
                  fill="red"
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
                />
              </svg>{" "}
              <p className="">{youTube}</p>
            </div>
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
      </div>
    </div>
  );
}
