// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Navigation, Mousewheel, Keyboard, Parallax } from "swiper/modules";

// import required modules
// import { Pagination } from "swiper/modules";

import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";

import { people } from "../constants/people";

export default function mySwiper() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Mousewheel, Keyboard, Parallax
]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={4}
        mousewheel={true}
        keyboard={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {people.map((person) => (
          <SwiperSlide>
            <div key={person.email}>
              <div>
                <a
                  href={person.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-50 w-50 flex-none bg-red-"
                    src={person.imageUrl}
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {person.email}
              </p>
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
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
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
            {/* ))} */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
