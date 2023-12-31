// import Link from "next/link";
// import Image from "next/image";
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
    <main className="flex w-full flex-col items-center justify-center text-center px-4 sm:mt-2 mt-20">
      <div className="flex justify-center space-x-4">
        <img
          alt="Israeli Soldier on and a building"
          src="src/img/banner/factChecking.png"
          className="w-96 h-96 rounded-2xl"
        />
        <div className="sm:mt-0 mt-8 w-full md:w-1/2">
          <button className="px-4 py-2 text-white bg-[#5a5cd1] rounded-md hover:bg-[#3f4194] focus:outline-none focus:ring"
            onClick={() => {
              window.location.href = "https://captionai-seven.vercel.app/";
            }
            } >
            Scan Social Media on line in real time
          </button>
        </div>
      </div>
      <div >
        <div >
          <div >
            <div className="w-full md:w-1/2">
              <img
                alt="Israeli Soldier on and a building"
                src="src/img/banner/azaMarchSouth.png"
                className="w-96 h-96 rounded-2xl"
                width={500}
                height={200}
              />
            </div>
            <div >
              <textarea className="w-full h-full p-2 text-gray-700 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring"
                placeholder="Enter text here..."
                value="a soldier standing on top of a building in Sderot - Israel"
              />
              <button className="px-400 py-2 text-white bg-[#5a5cd1] rounded-md hover:bg-[#3f4194] focus:outline-none focus:ring"
                onClick={() =>
                  copyToClipboard(
                    "a soldier standing on top of a building in Sderot - Israel"
                  )
                }
              >
                <div>
                  <HiOutlineClipboardDocument className="w-5 h-5 mr-1" />
                  {buttonText}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
