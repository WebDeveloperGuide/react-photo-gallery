import { useState } from "react";
import galleryImages from "../assets/galleryImage.json";
import ImageModal from "./ImageModal";
import CategorySection from "./CategorySection";

function GalleryLayout() {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const handleSelectImage = (image) => {
    setCurrentImage(image);
  };

  const handleSelectCategory = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="container mx-auto px-5 py-2 text-center">
      <div>
        <h1 className="text-2xl font-bold">Photo Gallery</h1>
      </div>
      <div className="mb-5 text-[#95979c]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="my-5 flex flex-wrap justify-center">
        <CategorySection
          handleSelectCategory={handleSelectCategory}
          currentCategory={currentCategory}
        />
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2 cursor-pointer hover:shadow-2xl hover:bg-slate-300"
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            onClick={() => handleSelectImage(image.url)}
            aria-hidden="true"
          >
            <img
              className="block mx-auto h-full object-cover object-center rounded shadow-md"
              src={image.url}
            />
          </div>
        ))}
      </div>

      <ImageModal
        selectedImage={currentImage}
        handleSelectImage={handleSelectImage}
        galleryImageData={galleryImages}
      />
    </div>
  );
}

export default GalleryLayout;
