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
                  <div className="text-xl flex justify-center gap-2 mt-3 font-bold">
                    {emoji === undefined ? (
                      file_emoji !== undefined ? (
                        <Image width="25px" height="20px" src={file_emoji} />
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

                    <Link href={notion_url}>
                      <div className="flex justify-center mt-5">
                        <div className="flex p-3 hover:cursor-pointer hover:dark:bg-gray-400 hover:underline hover:bg-[#484848] dark:bg-[#121212] bg-[#dee2e6]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24"
                            height="24"
                            viewBox="0 0 64 64"
                            className="mr-3"
                          >
                            <path d="M 42.019531 4 C 41.350297 3.998125 40.569828 4.0454531 39.611328 4.1269531 L 8.3945312 6.4140625 C 5.8765313 6.6300625 5 8.2646562 5 10.222656 L 5 44.193359 C 5 45.718359 5.5463281 47.022625 6.8613281 48.765625 L 14.199219 58.238281 C 15.404219 59.762281 16.500734 60.089469 18.802734 59.980469 L 55.056641 57.800781 C 58.122641 57.585781 59 56.169391 59 53.775391 L 59 15.558594 C 59 14.251594 58.450641 13.926516 56.806641 12.728516 L 46.841797 5.7597656 C 45.035047 4.4547656 44.027234 4.005625 42.019531 4 z M 41.373047 6.9882812 C 43.348223 7.0202598 44.474406 7.7785 45.347656 8.453125 L 50.556641 12.201172 C 50.777641 12.311172 51.332016 12.970703 50.666016 12.970703 L 19.298828 14.845703 C 15.971828 15.067703 15.306156 15.176141 13.535156 13.744141 L 9.2128906 10.326172 C 8.7708906 9.8841719 8.9926094 9.3336094 10.099609 9.2246094 L 40.472656 7.0214844 C 40.791156 6.9939844 41.090879 6.9837129 41.373047 6.9882812 z M 53.671875 17.009766 C 54.582299 17.101627 55 17.84175 55 19.078125 L 55 51.304688 C 55 52.720687 54.7795 53.920344 52.8125 54.027344 L 18.839844 55.988281 C 16.872844 56.095281 16 55.442219 16 53.699219 L 16 21.257812 C 16 19.842813 16.437047 19.186125 17.748047 19.078125 L 53.251953 17.011719 C 53.402328 16.997969 53.541814 16.996643 53.671875 17.009766 z M 50 22.5 L 43 23 C 41.359 23.196 40.5 24 40.5 25 L 43.5 25.5 L 43.5 40.5 L 32 23.5 L 24.201172 24.1875 C 22.662172 24.3795 22.12375 25.7085 22.34375 26.6875 L 25 27 L 25 48 L 24 48.5 C 22 49 22.5 50 22.5 50.5 L 30.5 50 C 33 49.5 33 48 33 48 L 29 47 L 29 31 L 39.935547 47.970703 C 41.244547 49.599703 41.751 50.5 43.5 50.5 C 45 50.5 46.5 50 47.5 49 L 47.5 25 L 48.892578 24.732422 C 49.999578 24.500422 50.5 23.5 50 22.5 z"></path>
                          </svg>
                        <button className="">Notion 으로 가기</button>
                        </div>
                      </div>
                    </Link>
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
