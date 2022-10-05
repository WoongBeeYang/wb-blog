import { TOKEN } from "../config";

export default function Modal({ listTitle, emoji}) {
  
   
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto text-black">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div className="bg-white sm:w-[800px] sm:h-[800px] w-[300px] h-[600px]">
              {/* 제목 */}
              <div className="flex justify-center font-bold sm:text-3xl mt-5 text-x">
                {emoji !== undefined ? <p className="mr-3">{emoji}</p> : ""}
                <p className="">{listTitle}</p>
              </div>

              <div className="border-t-2 mt-5 border-gray-400">
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
                무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과
                백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
                삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과
                백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
                삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과
                백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
                삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과
                백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
                삼천리 화려강산 대한사람 대한으로 길이 보전하세
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(){
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
  console.log(haha)
}
  
  
