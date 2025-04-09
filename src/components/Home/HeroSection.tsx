/* eslint-disable @typescript-eslint/no-explicit-any */

import { Search } from "lucide-react";
import user1 from "@/assets/hero-bg/customer/user1.jpg";
import user2 from "@/assets/hero-bg/customer/user2.jpg";
import user3 from "@/assets/hero-bg/customer/user3.jpg";
import bikeimg1 from "@/assets/hero-bg/banner-img-01.png";
import Container from "../Shared/Container";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData: any) => {
    const { brand, date } = formData;

    // Navigate to the BikeList page with brand and date as query parameters
    navigate(`/bike?brand=${brand}&date=${date}`);
  };
  const brands = [
    "Yamaha",
    "Suzuki",
    "KTM",
    "Kawasaki",
    "Enfield",
    "Honda",
    "TVS",
  ];
  return (
    <Container className="mb-32">
      <div className="flex  lg:flex-row flex-col  justify-between relative xl:px-0 px-4">
        <div className=" lg:pt-24 pt-20 xl:w-[800px] lg:w-[550px] w-full">
          <h1 className="xl:text-[55px] lg:text-[40px] text-[34px] font-bold xl:leading-tight leading-tight sm:text-start text-center">
            Make your Ride Easy with{" "}
            <span className="relative inline-block pb-2">
              BIKERIDERZ
              <span className="absolute bottom-0 left-0 right-0 h-[9px] bg-[#ffa633] "></span>
            </span>
          </h1>

          <p className="md:text-2xl text-xl font-semibold md:pb-4 pb-3 lg:pt-8 md:pt-4 pt-8 sm:text-start text-center">
            We prioritizes customer satisfaction
          </p>
          <div className="w-full  md:h-[110px] h-[160px]  shadow-xl rounded-md ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex  md:flex-row flex-col  items-center justify-between  md:px-4 px-2  py-7 md:gap-0 gap-5">
                <div className="flex  items-center  xl:space-x-16 lg:space-x-2 md:space-x-16 space-x-5">
                  <div className="">
                    <select
                      {...register("brand")}
                      className="border border-[#ff950a] cursor-pointer focus:outline-none focus:border-[#ffa633] xl:w-[240px] lg:w-[180px] md:w-[210px] sm:w-[150px] w-[110px] h-12  px-3 xl:text-lg md:text-base sm:text-sm text-xs"
                    >
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div>
                      <input
                        type="date"
                        {...register("date", { required: true })}
                        className=" py-2 border border-[#ff950a] cursor-pointer focus:outline-none focus:border-[#ffa633] xl:w-[240px] lg:w-[180px] md:w-[210px] sm:w-[190px] w-[150px] h-12  px-3  text-left font-normal xl:text-lg sm:text-sm text-xs justify-between"
                      />
                    </div>
                  </div>
                </div>

                <button className="flex sm:text-lg text-base items-center justify-center gap-2 bg-[#ffa633] text-white md:w-[140px] w-full h-12 p-3 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    <Search />
                    <span>Search</span>
                  </span>
                  <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                </button>
              </div>
            </form>
          </div>
          <p className="md:pt-10 pt-12 md:text-lg text-base">
            Experience the ultimate freedown of Dreamsrental - tailor adventure
            by choosing from Premium bikes
          </p>
          <div className="flex  md:flex-row flex-col items-center justify-between pt-8">
            <div className="flex xl:gap-6 gap-4 items-center justify-center">
              <div className="flex">
                <img
                  src={user2}
                  className="xl:w-[40px]  xl:h-[40px] w-[35px] h-[35px] rounded-full "
                  alt=""
                />
                <img
                  src={user1}
                  className="xl:w-[40px]  xl:h-[40px] w-[35px] h-[35px]  rounded-full"
                  alt=""
                />
                <img
                  src={user3}
                  className="xl:w-[40px]  xl:h-[40px]  w-[35px] h-[35px] rounded-full"
                  alt=""
                />
              </div>
              <div>
                <p className="xl:text-2xl lg:text-xl font-bold">
                  10K+ Customers
                </p>
                <p className="xl:text-lg lg:text-base text-gray-500">
                  has used our renting services
                </p>
              </div>
            </div>
            <button className="flex text-lg items-center justify-center bg-[#ffa633] text-white w-[140px] h-12 p-3 md:mt-0 mt-4 md:ml-0 ml-8 relative group overflow-hidden">
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(https://i.ibb.co.com/WnvBYWN/ban-bg.png)`,
            backgroundRepeat: "no-repeat",
          }}
          className="bg-cover bg-center flex items-center justify-center xl:w-[480px] xl:h-[510px] lg:mt-[90px] mt-[40px] lg:w-[360px] lg:h-[390px] md:w-[350px] md:h-[380px] sm:w-[320px] sm:h-[350px] w-[300px] h-[310px] lg:mx-0 mx-auto relative"
        >
          <motion.img
            initial={{ x: 0 }}
            animate={{ x: [0, 40] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={bikeimg1}
            className="xl:w-[480px] xl:h-[480px] lg:w-[380px] lg:h-[380px] md:w-[330px] md:h-[330px] sm:w-[300px] sm:h-[300px] w-[280px] h-[280px] mr-12"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
