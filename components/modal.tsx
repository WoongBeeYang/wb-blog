export default function Modal({ listTitle }) {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div className="bg-white sm:w-[800px] sm:h-[800px] w-[300px] h-[600px]">
              <p className="font-bold sm:text-3xl mt-5 text-xl text-black">
                {listTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
