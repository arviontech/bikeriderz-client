import bike1 from "@/assets/bike/bikes.jpg";
import bike2 from "@/assets/bike/bike.jpg";
import suzuki from "@/assets/bike/suzuki-gsx-r600.png";
import Container from "../Shared/Container";
import { Link } from "react-router-dom";

const KnowUs = () => {
  return (
    <Container className="mb-32 px-5">
      <div className=" flex lg:flex-row flex-col lg:gap-14 md:gap-28 gap-32 justify-center">
        <div className="relative lg:flex-col flex">
          <div className="flex">
            <div className="relative group xl:left-28 xl:top-8 lg:left-16 lg:top-6 top-20">
              <div
                style={{
                  clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)",
                }}
                className="bg-[#ff3a23] xl:w-[50px] xl:h-[90px] md:w-[40px] md:h-[70px] w-[25px] h-[50px] "
              ></div>

              <div className=" bg-[#ff3a23] xl:w-[120px] xl:h-[140px] lg:w-[90px] lg:h-[110px] md:w-[100px] md:h-[120px] w-[80px] h-[100px] absolute xl:top-5 lg:top-4 top-4">
                <p className="xl:text-4xl md:text-3xl text-2xl font-bold text-white pt-4 md:pl-4 pl-2 pb-2">
                  10
                </p>
                <p className="xl:text-base lg:text-xs md:text-sm text-xs text-white md:pl-4 pl-2">
                  Years of Experience
                </p>
              </div>
            </div>

            <div>
              <img
                src={bike2}
                className="xl:w-[450px] xl:h-[300px] lg:w-[350px] lg:h-[270px] md:w-[390px] md:h-[300px] w-[320px] h-[240px] object-cover object-center xl:ml-28 lg:ml-16 ml-0 rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <img
                src={bike1}
                className="xl:w-[450px] xl:h-[300px] lg:w-[350px] lg:h-[270px] md:w-[390px] md:h-[300px]  w-[320px] h-[240px] object-cover object-center relative lg:-top-20 md:top-20 lg:right-0 md:right-14 top-24 right-10  rounded-lg"
                alt=""
              />
              <div className=" bg-gradient-to-r from-transparent to-[#ffa633] opacity-30  xl:w-[450px] xl:h-[300px] lg:w-[350px] lg:h-[270px] md:w-[390px] md:h-[300px]  absolute lg:-top-20 md:top-10  z-1 lg:block hidden"></div>

              <img
                src={suzuki}
                alt=""
                className="w-[250px] object-cover object-center lg:top-28 right-0 absolute lg:block hidden"
              />
            </div>
          </div>
        </div>
        <div className="relative  lg:w-[500px] w-full">
          <p className="text-base text-[#ff950a] pb-2">GET TO KNOW US</p>
          <h2 className="md:text-4xl text-2xl font-bold pb-6 leading-tight">
            Services with a Wide Range of Bikes
          </h2>
          <p className="md:text-xl text-lg text-[#ff950a] font-medium pb-6">
            committed to providing our customers with exceptional service.
          </p>
          <p className="md:text-base text-sm text-gray-500 pb-6">
            At BIKERIDERZ, we offer a diverse range of premium bikes for every
            adventure. Our commitment to excellence ensures you receive
            top-notch service and reliable rentals, making your rides
            unforgettable and enjoyable
          </p>
          <div className="flex gap-10 md:pb-12 pb-10">
            <div>
              <div className="pb-6">
                <span className="relative inline-block pb-2 md:text-lg sm:text-sm text-xs">
                  Many Pickup Locations
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff950a] "></span>
                </span>
              </div>
              <div>
                <span className="relative inline-block pb-2 md:text-lg sm:text-sm text-xs">
                  Offering Low Prices
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff950a] "></span>
                </span>
              </div>
            </div>
            <div>
              <div className="pb-6">
                <span className="relative inline-block pb-2 md:text-lg sm:text-sm text-xs">
                  News & Luxury Bikes
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff950a] "></span>
                </span>
              </div>
              <div>
                <span className="relative inline-block pb-2 md:text-lg sm:text-sm text-xs">
                  Trusted Rental Service
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff950a] "></span>
                </span>
              </div>
            </div>
          </div>
          <Link to={"/bike"}>
            <button className="flex text-lg items-center justify-center bg-[#ffa633] text-white w-[150px] h-14  p-3 md:mt-0 mt-4 md:ml-0  relative group overflow-hidden">
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default KnowUs;
