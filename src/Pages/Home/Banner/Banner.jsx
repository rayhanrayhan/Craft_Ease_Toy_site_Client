import React from "react";
import banner from "./../../../assets/banner1.png";
import banner2 from "./../../../assets/banner2.png";
import banner3 from "./../../../assets/banner3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel relative w-full my-8 md:my-0 ">
        <div id="slide1" className="carousel-item py-28 relative w-full">
          <img src={banner} className="w-full" alt="Banner 1" />

          <div className="absolute flex justify-end   text-white transform -translate-y-16 left-5 md:right-5 -right-6 top-3/4 md:top-1/2">
            <div className="md:mr-56 ">
              <h3 className="bg-[#c421ae] -my-14 text-sm md:text-4xl py-1 md:py-3 px-1 md:px-3 italic font-bold w-24 md:w-60 rounded-t-lg">
                Big discount
              </h3>
              <h2 className="text-lg md:text-7xl font-extrabold py-12">
                KIDS OFFER
              </h2>
              <p className=" text-xs md:text-lg font-medium w-auto -my-12  mb-2 mr-8">
                Flat 10% Off On Order Above$29.99
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item py-28 relative w-full">
          <img src={banner2} className="w-full" alt="Banner 2" />
          <div className="absolute flex justify-end   text-white transform -translate-y-16 left-5 md:right-5 -right-6 top-3/4 md:top-1/2">
            <div className="md:mr-56 ">
              <h3 className="bg-[#c421ae] -my-14 text-sm md:text-4xl py-1 md:py-3 px-1 md:px-3 italic font-bold w-24 md:w-60 rounded-t-lg">
                Big discount
              </h3>
              <h2 className="text-lg md:text-7xl font-extrabold py-12">
                KIDS OFFER
              </h2>
              <p className=" text-xs md:text-lg font-medium w-auto -my-12  mb-2 mr-8">
                Flat 10% Off On Order Above$29.99
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item py-28 relative w-full">
          <img src={banner3} className="w-full" alt="Banner 3" />

          <div className="absolute flex justify-end   text-white transform -translate-y-16 left-5 md:right-5 -right-6 top-3/4 md:top-1/2">
            <div className="md:mr-56 ">
              <h3 className="bg-[#c421ae] -my-14 text-sm md:text-4xl py-1 md:py-3 px-1 md:px-3 italic font-bold w-24 md:w-60 rounded-t-lg">
                Big discount
              </h3>
              <h2 className="text-lg md:text-7xl font-extrabold py-12">
                KIDS OFFER
              </h2>
              <p className=" text-xs md:text-lg font-medium w-auto -my-12  mb-2 mr-8">
                Flat 10% Off On Order Above$29.99
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
