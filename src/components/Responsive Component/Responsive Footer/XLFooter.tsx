import { Link } from "react-router-dom";
import logo from "@/assets/logo/bikeLogo3.png";
import { Mail, MapPin, Phone } from "lucide-react";
import fb from "@/assets/icon/fb.png";
import insta from "@/assets/icon/insta.png";
import twitter from "@/assets/icon/twit.png";
import youtube from "@/assets/icon/tube.png";
import card1 from "@/assets/icon/card-1.png";
import card2 from "@/assets/icon/card-2.png";
import card3 from "@/assets/icon/card-3.png";
import card4 from "@/assets/icon/card-4.png";
import card5 from "@/assets/icon/card-5.png";
import { useState } from "react";
import { toast } from "sonner";
const XLFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      toast.success("Your email is subscribed");
      setEmail("");
    } else {
      toast.error("Please enter a valid email");
    }
  };
  return (
    <div className="">
      <div className="py-16 lg:px-4 xl:px-0 lg:block hidden">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-4">
            <div className="flex flex-col space-y-5">
              <div>
                <Link className="flex items-center gap-2 " to="/">
                  <img
                    className=" xl:w-[60px] w-[40px] pt-1 "
                    src={logo}
                    alt="logo"
                  />
                  <span className=" xl:text-4xl md:text-2xl text-xl text-white  font-bold">
                    BIKE<span className="text-[#ff950a]">RIDERZ</span>
                  </span>
                </Link>
                <p className="text-white pt-6 xl:text-base text-xs">
                  Rent premium bikes for any adventure. Explore our top-quality
                  fleet for unmatched performance and comfort on every ride.
                </p>
              </div>

              <div className="flex space-x-2 text-white xl:text-base text-xs">
                <Phone className="text-[#ff950a] h-4 xl:h-6" />
                <p>+880 1799-370138</p>
              </div>
              <div className="flex space-x-2 text-white xl:text-base text-xs">
                <MapPin className="text-[#ff950a] h-4 xl:h-6" />
                <p>38 Kemal Ataturk Ave, Dhaka 1213, Bangladesh</p>
              </div>
              <div className="flex space-x-2 text-white xl:text-base text-xs">
                <Mail className="text-[#ff950a] h-4 xl:h-6" />
                <p>bikeRiderz@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col space-y-[12px]  text-white">
              <p className="font-bold xl:text-lg text-base">INFORMATION</p>
              <div className="group relative w-[145px] cursor-pointer">
                <p className="xl:pt-[20px] pt-4  xl:text-base text-xs">
                  Delivery & Returns
                </p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[50px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">FAQ's</p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[122px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">
                  Specials Offers
                </p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[150px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">
                  Terms & Condition
                </p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[115px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">
                  Privacy Policy
                </p>
                <span className="custom-hover-line"></span>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col space-y-[12px]  text-white">
              <p className="font-bold xl:text-lg text-base">MY ACCOUNT</p>
              <div className="group relative w-[95px] cursor-pointer">
                <p className="xl:pt-[20px] pt-4  xl:text-base text-xs">
                  My Account
                </p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[65px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">Booking</p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[65px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">Wishlist</p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[65px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">Pricing</p>
                <span className="custom-hover-line"></span>
              </div>
              <div className="group relative w-[105px] cursor-pointer">
                <p className="xl:pt-3 pt-2 xl:text-base text-xs">
                  Order History
                </p>
                <span className="custom-hover-line"></span>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex flex-col space-y-5 text-white">
              <p className="font-bold xl:text-lg text-base">NEWSLETTER</p>
              <div className="flex w-full max-w-sm items-center xl:pt-[18px] pt-[10px]">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 w-full border border-[#222] rounded-l focus:outline-none  focus:border-[#1abfdc]"
                />
                <button
                  className="bg-[#ff950a] px-4 py-2 h-full text-white rounded-r border border-[#182532] -ml-px"
                  type="submit"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>

              <p className="pt-4  xl:text-base text-xs">
                Sign up get 20% sale off for first time, Get all the latest
                deals and special offers, first.
              </p>
              <div className="flex items-center  gap-2 pt-2 xl:pt-8 ">
                <p className="pr-5 xl:text-base text-xs">Follow us:</p>
                <div className="flex space-x-3 cursor-pointer">
                  <img className="xl:w-8 w-6" src={fb} alt="" />
                  <img className="xl:w-8 w-6" src={insta} alt="" />
                  <img className="xl:w-8 w-6" src={twitter} alt="" />
                  <img className="xl:w-8 w-6" src={youtube} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:pt-24 pt-20">
          <div className="border-b border-dashed "></div>
          {/* <div className=" border-dashed border-b bg-gray-200" /> */}
          <div className="flex justify-between xl:pt-8 pt-6">
            <p className="text-white xl:text-base text-xs">
              Copyright © 2024 BIKERIDERZ Ltd. All rights reserved.
            </p>
            <div className="flex gap-2 ">
              <img className="xl:w-8 w-7" src={card1} alt="" />
              <img className="xl:w-8 w-7" src={card2} alt="" />
              <img className="xl:w-8 w-7" src={card3} alt="" />
              <img className="xl:w-8 w-7" src={card4} alt="" />
              <img className="xl:w-8 w-7" src={card5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XLFooter;
