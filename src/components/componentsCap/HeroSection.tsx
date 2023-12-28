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

    <main >
      <h1 >
        Video Media Dome images
        {/* <p >
          Take your images to the next level with custom captions.
        </p> */}
      </h1>

      <div >

        <div>
          <button
            onClick={() => {
              window.location.href = "https://captionai-seven.vercel.app/";
              }
            } >
            Scan Social Media on line in real time
          </button>
        </div>
        {/* <div>
          <a
            href="https://youtu.be/9TZsh_-y9DA"
            target="_blank"
            rel="noreferrer"
          >
            How it's built
          </a>
        </div> */}
        {/* <div>
          <a
            href="https://github.com/jookie/captionai"
          >
            Description
          </a>
        </div> */}
      </div>
      <div >
        <div >
          <div >
            <div >
              {/* <h2 className="mb-1 font-medium text-lg">Original Photo</h2> */}
              <img
                alt="Israeli Soldier on and a building"
                src="src/public/war2.jpg"
                className="w-96 h-96 rounded-2xl"
                width={200}
                height={200}
              />
            </div>
            <div >
              {/* <h2 className="mb-1 font-medium text-lg">Generated Caption</h2> */}
              <textarea
                placeholder="Enter text here..."
                value="a soldier standing on top of a building in Sderot - Israel"
              />
              <button
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
