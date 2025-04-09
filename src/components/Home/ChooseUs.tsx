import bg from "@/assets/hero-bg/vectorBg.jpg";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  Pointer,
} from "lucide-react";
import Container from "../Shared/Container";

const ChooseUs = () => {
  const benefitPointData = [
    {
      id: 1,
      image: (className: string) => (
        <span>
          <Pointer className={className} />
        </span>
      ),
      title: "Easier Bookings",
      description:
        "Booking with BikeRiderz is quick and easy. Our platform lets you reserve bikes in minutes for a hassle-free experience.",
    },
    {
      id: 2,
      image: (className: string) => (
        <span>
          <BadgeCheck className={className} />
        </span>
      ),
      title: "Quality Bikes",
      description:
        "BikeRiderz offers high-quality, reliable bikes with regular maintenance for a safe, comfortable, and enjoyable riding experience.",
    },
    {
      id: 3,
      image: (className: string) => (
        <span>
          <CircleDollarSign className={className} />
        </span>
      ),
      title: "Affordable Pricing",
      description:
        "BikeRiderz provides competitive, transparent pricing for premium bikes, ensuring quality rentals that fit any budget with no hidden fees.",
    },
    {
      id: 4,
      image: (className: string) => (
        <span>
          <FaPeopleGroup className={className} />
        </span>
      ),
      title: "100% Satisfied",
      description:
        "BikeRiderz prioritizes customer satisfaction with reliable bikes, exceptional service, and a smooth, hassle-free rental experience every time.",
    },
  ];

  return (
    <div className=" mb-28 relative ">
      <img
        className="w-full xl:h-[700px] lg:h-[770px] md:h-[1050px] h-[1750px] object-cover object-center"
        src={bg}
        alt=""
      />
      <div className="absolute top-14  w-full mx-auto px-3">
        <h1 className="xl:text-4xl md:text-3xl text-2xl text-center font-bold mb-6">
          Why People Love To Use{" "}
          <span className="relative inline-block pb-2">
            BIKERIDERZ
            <span className="absolute bottom-0 left-0 right-0 h-[9px] bg-[#ffa633]"></span>
          </span>
        </h1>

        <p className="text-gray-500 text-base md:w-[600px] w-full text-center mx-auto pb-12">
          Using BikeRiderz for bike rentals because it offers quality bikes,
          convenience, flexibility, affordability, excellent customer service &
          a commitment to community engagement & sustainability.
        </p>

        <Container className="   grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-10   ">
          {benefitPointData.map((item) => (
            <div
              className="bg-[#ffffff] mx-auto shadow-xl xl:w-[300px] xl:h-[370px] lg:w-[230px]  lg:h-[400px] md:w-[320px] md:h-[360px] sm:w-[335px] sm:h-[310px] w-[315px] h-[320px] rounded-xl relative group"
              key={item.id}
            >
              <div className="xl:px-8 px-5 pt-8 ">
                <h2 className="text-xl font-bold pb-3">{item.title}</h2>
                <p className="md:text-base text-sm text-gray-500 lg:pb-6 pb-2 w-full xl:h-[140px] lg:h-[167px] md:h-[130px] sm:h-[80px] h-[88px]">
                  {item.description}
                </p>

                <div className="w-24 h-24 cursor-pointer bg-[#ffa633] rounded-full transition-all  duration-500 group-hover:scale-110 ease-in-out flex items-center justify-center p-2 text-white group-hover:bg-[#ff950a] border-white border-[6px]  relative -bottom-5">
                  {item.image("w-8 h-8 ")}
                </div>
              </div>

              <div className="bg-[#f3f3f3] cursor-pointer group-hover:bg-[#ff950a] w-full h-[65px] flex justify-end items-center pr-4 rounded-b-xl transition-all duration-700 ease-in-out">
                <p className="flex gap-1 items-center text-gray-700 group-hover:text-white xl:text-base text-sm">
                  CHECK NOW
                  <span>
                    <ArrowRight className="text-current" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default ChooseUs;
