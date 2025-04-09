import { AlignJustify, Mail, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";
import logo from "@/assets/logo/bikeLogo3.png";
import Lottie from "lottie-react";
import handWave from "@/assets/lottie/wavinghand.json";
import { useAppSelector } from "@/redux/hook";
import { useGetSingleUserQuery } from "@/redux/api/User Api/userApi";
const TopNav = () => {
  const { user } = useAppSelector((store) => store.auth);
  const id = user?._id;
  const { data } = useGetSingleUserQuery(id);
  return (
    <div className="h-[80px] w-full bg-[#eff2f6]  shadow-md sticky top-0 z-50  pt-3">
      <div className="md:px-4 px-0">
        <div className="flex justify-between items-center ">
          <div className="lg:hidden block">
            <div className="flex items-center justify-center ">
              <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="text-[#ff950a] bg-transparent">
                      <AlignJustify />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="bg-[#374462]      text-white shadow-2xl "
                  >
                    <div>
                      <Sidebar />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="flex items-center  gap-1">
              <p className="text-lg ">Welcome {data?.data?.name} </p>
              <div className=" ">
                <Lottie
                  animationData={handWave}
                  loop={true}
                  className="w-9 h-9"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 ">
              Here's what's happening with your store today.
            </p>
          </div>
          <div className="lg:hidden sm:block hidden">
            <Link className="flex items-center justify-center gap-1 " to="/">
              <img className="  w-[40px] pt-1 " src={logo} alt="logo" />
              <span className="  text-2xl   font-bold">
                BIKE<span className="text-[#ff950a]">RIDERZ</span>
              </span>
            </Link>
          </div>

          <div>
            <div className="flex items-center  md:space-x-7 space-x-2  pr-5 ">
              <div className="bg-[#d5e0f0] rounded-full p-3 w-11 h-11 flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <div className="relative cursor-pointer bg-[#d5e0f0] rounded-full p-3 w-11 h-11 flex items-center justify-center">
                <Mail className="w-6 h-6" />
                <div className="absolute xl:-top-1 text-white -top-1 -right-1 bg-[#6783cc]  w-6 h-6 rounded-full flex items-center justify-center">
                  <p className="text-center text-xs">6+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
