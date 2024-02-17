// Import Swiper React components
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";

import { people } from "../constants/people";
export default function mySwiper() {
  // const pagination = {
  //   clickable: true,
  //   renderBullet : function (index, className) {
  //     ren = '<span class="' + className + '">' + (index + 1) + "</span>";
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  //   },
  // };
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
        {people.map((person) => (
          <Swiper
            scrollbar={{
              hide: true,
            }}
            
            modules={[Scrollbar]}
            // modules={[Navigation, Pagination]}
            className="mySwiper"
            // pagination={{
            //   dynamicBullets: true,
            //   type: "progressbar",
            //   type: "fraction",
            // }}
            navigation={true}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              340: {
                slidesPerView: 6,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[FreeMode, Pagination]}
            // className="max-w-[90%] lg:max-w-[80%]"
          >
            <SwiperSlide>
              {/* <div>
              <img
                className="h-100 w-190 flex-none bg-red-"
                src={person.imageUrl}
              />
              <h1 className="text-xl lg:text-2xl">{person.name} </h1>
              <p className="lg:text-[18px]">{person.role} </p>
            </div> */}
              <div>
                <div className="flex-shrink-0 flex flex-col items-center py-5">
                  <div key={person.email}></div>
                  <a
                    href={person.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: person.imageUrl}}
                /> */}
                    <img
                      className="absolute inset-0 bg-cover bg-center"
                      src={person.imageUrl}
                      alt=""
                    />
                  </a>
                  {/* ... rest of your code for each person ... */}
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <p className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {person.role}
                    </p>
                    {person.lastSeen ? (
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Last seen{" "}
                        <time dateTime={person.lastSeenDateTime}>
                          {person.lastSeen}
                        </time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          Online
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
              </div>
            </SwiperSlide>
          </Swiper>
        ))}
      </div>
    </>
  );
}
