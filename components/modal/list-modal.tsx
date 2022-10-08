import Image from "next/image";
import Link from "next/link";

export default function ListModal({
  listTitle,
  emoji,
  file_emoji,
  notion_url,
  description,
}) {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="fixed inset-0 z-10 overflow-y-auto text-black">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <div className="bg-[#f8f9fa] dark:bg-[#282828] dark:text-white sm:w-[600px] sm:h-[300px] w-[400px] h-[300px]">
                <div className="mt-8 flex flex-col">
                  {/* Title */}
                  <div className="text-xl flex justify-center gap-2 mt-3">
                    {emoji === undefined ? (
                      file_emoji !== undefined ? (
                        <Image width="20px" height="15px" src={file_emoji} />
                      ) : (
                        ""
                      )
                    ) : (
                      emoji
                    )}
                    <p>{listTitle}</p>
                  </div>

                  {/* 내용 */}
                  <div className="flex flex-col">
                    <div className="mt-3">
                      <p>{description}</p>
                    </div>
                    <div className="mt-3 border">
                      <Link href={notion_url}>
                        <button className="">Notion 으로 가기</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
