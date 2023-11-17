import ImageSlider from "./slider/ImageSlider";

function ImageModal({ selectedImage, handleSelectImage, galleryImageData }) {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600">
            <h4 className="font-bold text-gray-900 dark:text-white ml-2">
              Image Gallery
            </h4>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="mx-10 mt-3 mb-3">
            <img className="" src={selectedImage} />
          </div>

          <div className="w-100 mx-10">
            <div>
              <ImageSlider
                handleSelectImage={handleSelectImage}
                galleryImageData={galleryImageData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
