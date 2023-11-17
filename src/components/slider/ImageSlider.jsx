import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

const sliderSetting = {
  accessibility: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: "10px",
  nextArrow: (
    <div>
      <div className="next-slick-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  ),

  prevArrow: (
    <div>
      <div className="next-slick-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  ),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        accessibility: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        accessibility: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        accessibility: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function ImageSlider({ handleSelectImage, galleryImageData }) {
  const sliderRef = useRef();

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrevious = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") {
        gotoNext();
      } else if (e.key === "ArrowLeft") {
        gotoPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <Slider ref={sliderRef} {...sliderSetting}>
        {galleryImageData.map((image, index) => (
          <div
            key={image.id}
            className="cursor-pointer"
            onClick={() => handleSelectImage(image.url)}
            aria-hidden="true"
          >
            <img
              src={image.url}
              className="h-[100px] sm:h-[100px] md:h-[150px] lg:h-[150px] w-[90%] object-contain mx-auto my-0 gallery-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
