import { TBike } from "@/types/Types";
import { Heart, Star } from "lucide-react";
import cc from "@/assets/icon/car-engine.png";
import power from "@/assets/icon/power.png";
import mileage from "@/assets/icon/mileage.png";
import tyer from "@/assets/icon/tyer.png";
import { Link } from "react-router-dom";

const FeaturedProductCard = ({ item }: { item: TBike }) => {
  return (
    <div className=" px-3 pt-4 xl:w-[305px] w-[325px] h-[480px] border border-gray-300 hover:shadow-xl relative group overflow-hidden mx-auto">
      <img
        src={item?.images[0]}
        className="w-[290px] h-[210px] object-center object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 pb-4"
        alt=""
      />
      <div className="flex gap-6 items-center pt-3 pb-1">
        <div className="flex items-center  space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="md:w-[20px] w-[18px] h-[18px]"
              color="orange"
              fill="orange"
            />
          ))}
        </div>
        <p className="text-sm ">110 Reviews</p>
      </div>
      <p className="text-xl font-bold pt-2 pb-4">{item?.name}</p>
      <div className="flex space-x-5 items-center justify-center pb-7 pt-2">
        <div className="flex flex-col items-center justify-center">
          <img src={cc} alt="" className="w-7 h-7" />
          <p className="pt-2 text-xs text-gray-500">{item?.cc} Cc</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={power} alt="" className="w-7 h-7" />
          <p className="pt-2 text-xs text-gray-500">{item?.power} BHP</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={mileage} alt="" className="w-7 h-7" />
          <p className="pt-2 text-xs text-gray-500">{item?.mileage} Kmpl</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={tyer} alt="" className="w-7 h-7" />
          <p className="pt-2 text-xs text-gray-500">{item?.tyreType}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="xl:text-xs text-sm text-gray-500">
            <span className="text-base font-bold text-black">
              {item?.pricePerHour}Tk
            </span>{" "}
            / Hour
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:w-10 w-9 md:h-10 h-9 cursor-pointer hover:text-white border border-gray-300 hover:border-none hover:bg-[#ff950a] rounded-full transition-all duration-500 md:hover:scale-110 hover:scale-90 ease-in-out flex items-center justify-center p-2 ">
            <Heart className="w-8 h-8" />
          </div>
          <Link to={`/singleProduct/${item._id}`}>
            <button className="flex text-sm items-center justify-center bg-[#ffa633] text-white w-[120px] h-11 p-3  relative group overflow-hidden">
              <span className="relative z-10">View Details</span>
              <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
