import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex  justify-center gap-6">
                <img
                  className="rounded-full h-[100px] w-[100px]"
                  src="/elon-mask.jpeg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg font-bold">Elon Mask</h4>
                  <p>Billioners of the World</p>
                  <div>
                    <Rating
                      style={{ maxWidth: 100, marginTop: 5 }}
                      value={rating}
                      onChange={setRating}
                      isDisabled
                    />
                  </div>
                </div>
              </div>
              <div>
                <FaQuoteRight className="text-5xl opacity-60" />
              </div>
            </div>
            <div className="divider mt-0 mb-0"></div>
            <div>
              <div className="card-body">
                <h2 className="card-title">Good Work</h2>
                <p>
                  This Site is Very Nice and Attractive.. you might visit this
                  site and find your dream jobs Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Veritatis deleniti soluta nemo
                  reiciendis magnam, qui obcaecati rem voluptatem id vitae non
                  excepturi, odit praesentium a totam inventore nisi enim
                  labore!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
