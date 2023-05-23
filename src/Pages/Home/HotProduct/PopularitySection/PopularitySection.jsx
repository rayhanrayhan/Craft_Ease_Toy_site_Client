import React from "react";
import { FaShippingFast } from "react-icons/fa";
import call from "./../../../../assets/call.png";
import payment from "./../../../../assets/payment.png";
import deliver from "./../../../../assets/deliver.png";
import "./PopurlaritySection.css";

const PopularitySection = () => {
  return (
    <div className=" py-6">
      <div className="w-9/12 mx-auto rounded-lg  bg-gradient-to-r from-[#453f63] to-[#7764d9]">
        <div className="text-white md:flex justify-around px-3">
          {/* card 1 */}
          <div
            data-aos="fade-up"
            className="flex items-center hover:shadow-2xl duration-300"
          >
            <img className="w-24" src={deliver} alt="" />

            <div className="text-center">
              <h3 className="text-3xl font-bold">FAST SHIPPING</h3>
              <p className="text-2xl  mb-3">FAST SHIPPING</p>
            </div>
            <div className="border h-28 mx-3 bg-white w-1 rounded hr-line">
              <hr />
            </div>
          </div>
          {/* card 2 */}
          <div
            data-aos="fade-up"
            className="flex items-center  hover:shadow-2xl duration-300"
          >
            <img className="w-24" src={payment} alt="" />

            <div className="text-center">
              <h3 className="text-3xl font-bold">ONLINE PAYMENT</h3>
              <p className="text-2xl mb-3">ONLINE PAYMENT</p>
            </div>
            <div className="border   h-28 bg-white w-1 mx-3 rounded hr-line">
              <hr />
            </div>
          </div>
          {/* card 3 */}
          <div
            data-aos="fade-up"
            className="flex gap-2 items-center  hover:shadow-2xl duration-300"
          >
            <img className="w-24" src={call} alt="" />

            <div className="text-center">
              <h3 className="text-3xl font-bold">24/7 SUPPORT</h3>
              <p className="text-2xl mb-3">Unlimited help desk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularitySection;
