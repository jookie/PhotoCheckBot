// import Link from "next/link";
// import Image from "next/image";
// https://tailwindui.com/components#pricing
// https://github.com/webdevcody/convex-replicate/tree/main 

// Create Animated card slider with Tailwind CSS and Swiper | React.js
// https://gist.github.com/Mif2006/b6963b16274c973b7ddfacf3106bb114

// import ImageSlider  from "../sliders/ImageSlider7";
// import ActiveSlider from "../sliders/ActiveSlider";
import MySwiper from "../sliders/swiper/mySwiper";

import { useState } from "react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
export default function HeroSection() {
  const [buttonText, setButtonText] = useState("Copy");
  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption!);

    setButtonText("Copied!"); // set the button text to "Copied!" when text is copied
    setTimeout(() => {
      setButtonText("Copy"); // set the button text back to "Copy" after 2 seconds
    }, 2000);
  };
  return (
    <main>
      {<MySwiper />}
      <div className="flex flex-col items-center justify-center text-center sm:mt-2 mt-1 flex-1 px-5 w-full">
        {/* <div className="flex py-28"> */}
        {/* </div> */}
        {/* <ImageSlider></ImageSlider> */}
        {/* {<ActiveSlider></ActiveSlider>} */}
        {/* <Stackedlist></Stackedlist> */}
        {/* banner start*/}
        <div className="flex flex-wrap w-full md:w-1/4 p-2">
          <div className="w-2/3 md:w-1/4 p-2">
            <img
              alt="banner_left"
              src="src/img/banner/factChecking.png"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3 md:w-1/4 p-2">
            <img
              alt="banner_right"
              src="src/img/banner/azaMarchSouth.png"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* banner end*/}
        <div className="">
          <textarea
            className="w-full h-full p-2 text-gray-700 border border-gray-300 resize-none focus:outline-none focus:ring"
            placeholder="Enter text here..."
            value="A soldier standing on top of a building in Sderot - Israel"
          />
          <button
            className="px-400 py-2 text-white bg-[#5a5cd1] rounded-md hover:bg-[#3f4194] focus:outline-none focus:ring flex w-1/2 p-4"
            onClick={() =>
              copyToClipboard(
                "A soldier standing on top of a building in Sderot - Israel"
              )
            }
          >
            <div>
              <HiOutlineClipboardDocument className="w-5 h-5 mr-1" />
              {buttonText}
            </div>
          </button>
        </div>
        <div className="sm:mt-0 mt-8 w-full md:w-1/2">
          <button
            className="px-4 py-2 text-white bg-[#5a5cd1] rounded-md hover:bg-[#3f4194] focus:outline-none focus:ring"
            onClick={() => {
              window.location.href = "https://captionai-7ed8vherv-dovpeles.vercel.app/";
            }}
          >
            Scan Social Media on line in real time
          </button>
        </div>{" "}
        {/* scan button*/}
      </div>
      {/* main */}
    </main>
  );
}
