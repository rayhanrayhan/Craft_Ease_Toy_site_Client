import React from "react";
import logo from "./../../assets/main-logo.png";
import paymentIcon from "./../../assets/ssl.png";
import { Link } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="bg-[#fafafa] border border-t-red-500 border-opacity-50 ">
      <footer className="w-9/12 mx-auto p-5 text-base-content">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* logo and details address */}
          <div className="col-span-2 md:col-span-2">
            <img className="w-32 rounded-lg" src={logo} alt="" />
            <p className="text-lg mr-14">
              A kids toy shop is a store that specializes in selling toys and
              games designed specifically for children.
            </p>
            <p className="flex items-center gap-1">
              <FaAddressBook /> address:
              <span>1800 Abbot Kinney Nebraska UK</span>
            </p>
            <p className="flex items-center gap-1">
              <MdEmail />
              Email: <span>hello@example.com</span>
            </p>
            <p className="flex items-center gap-1">
              <FiPhone />
              Phone: <span>(012) 345 6789</span>
            </p>
          </div>
          {/* quick link */}
          <div className="mx-2 md:mx-auto">
            <div>
              <h3 className="footer-title p-2">Quick Links</h3>
            </div>
            <ul>
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Policies & Rules</Link>
              </li>
            </ul>
          </div>
          {/* Information */}
          <div>
            <h3 className="footer-title p-2">Information</h3>
            <div>
              <ul>
                <li>
                  <Link to="#">Product Support</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy</Link>
                </li>
                <li>
                  <Link to="#">Affiliate</Link>
                </li>
                <li>
                  <Link to="#">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-gradient-to-r from-[#453f63] to-[#7764d9]    text-white  font-semibold bg-[#4acdd5] py-4 border-t border-base-300">
        <div className="grid grid-cols-1 md:grid-cols-2 w-9/12 mx-auto ">
          {/* footer er footer */}
          <div className="flex gap-2 items-center ">
            <img className="w-14 bg-white rounded-full " src={logo} alt="" />
            <p className="text-sm">
              CRAFTEASE
              <br />
              Copyright CRAFTEASE | Built with Rayhan Uddin by{" "}
              <span className="text-[#8730a1]">Programming Hero</span>
            </p>
          </div>

          {/* social logo */}
          <div className=" text-center  mt-4 md:mt-0">
            <div className="inline-flex mb-1 ">
              <div className="flex gap-4">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* paymetn icon  */}
            <div className="">
              <img src={paymentIcon} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
