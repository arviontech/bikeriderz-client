import logo from "@/assets/logo/bikeLogo3.png";
import { AlignJustify, Heart, UserRound } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/features/Auth/authSlice";
import { toast } from "sonner";

const SmNavbar = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const dashboardLink =
    user?.role === "admin" ? "/admin-dashboard" : "/user-dashboard";
  const handleLogout = () => {
    dispatch(logOut());
    toast.success("You are logged out");
    navigate("/login");
  };
  const Links = [
    { name: "HOME", link: "/" },
    { name: "BIKE LIST", link: "/bike" },
    ...(user ? [{ name: "DASHBOARD", link: dashboardLink }] : []),
    { name: "ABOUT US", link: "/about" },
    { name: "BLOG", link: "/blog" },
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-[#ff950a] bg-transparent">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                {" "}
                <span className="   sm:text-2xl text-xl  font-bold">
                  BIKE<span className="text-[#ff950a]">RIDERZ</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <div className="bg-[#F5F8FA] mt-4">
              <ul className="flex flex-col divide-y divide-gray-400  ">
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className=" pl-6   text-base  py-4 cursor-pointer relative group hover:bg-[#ff950a] hover:text-white transition-all duration-500 ease-in-out"
                  >
                    <SheetClose asChild>
                      <Link to={link.link} className="relative w-full h-full">
                        {link.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <Link className="flex items-center gap-1 " to="/">
          <img
            className="  sm:w-[40px] xs:w-[30px] pt-1 "
            src={logo}
            alt="logo"
          />
          <span className="  sm:text-2xl text-xl   font-bold">
            BIKE<span className="text-[#ff950a]">RIDERZ</span>
          </span>
        </Link>
      </div>
      <div className=" flex items-center  md:space-x-2 space-x-0 ">
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="sm:w-10 sm:h-10 w-9 h-9 cursor-pointer bg-transparent hover:bg-[#ff950a] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2 text-gray-700 hover:text-white">
                <UserRound className="w-8 h-8 " />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className=" w-[160px]  text-sm text-center ">
              {user ? (
                <div>
                  <p
                    className="hover:text-[#ff950a] cursor-pointer "
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </p>
                </div>
              ) : (
                <div className="flex justify-center gap-2">
                  <Link to={"/login"}>
                    <p className="hover:text-[#ff950a] cursor-pointer ">
                      LOGIN
                    </p>
                  </Link>
                  <p>|</p>
                  <Link to={"/signup"}>
                    <p className="hover:text-[#ff950a]  cursor-pointer">
                      SIGNUP
                    </p>
                  </Link>
                </div>
              )}
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="sm:w-10 sm:h-10 w-9 h-9 cursor-pointer hover:bg-[#ff950a] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2 text-gray-700 hover:text-white">
          <Heart className="w-8 h-8  " />
        </div>
      </div>
    </div>
  );
};

export default SmNavbar;
