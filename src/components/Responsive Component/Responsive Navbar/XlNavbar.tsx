import logo from "@/assets/logo/bikeLogo3.png";
import { Heart, UserRound } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/features/Auth/authSlice";
import { toast } from "sonner";

const XlNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.auth);
  const dashboardLink =
    user?.role === "admin" ? "/admin-dashboard" : "/user-dashboard";

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("You are logged out");
    navigate("/login");
  };

  const Links = [
    { name: "HOME", link: "/" },
    { name: "BIKE LIST", link: "/bike" },
    ...(user ? [{ name: "DASHBOARD", link: dashboardLink }] : []), //The spread operator is used here to merge arrays conditionally.
    { name: "ABOUT US", link: "/about" },
    { name: "BLOG", link: "/blog" },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <div>
          <Link className="flex items-center gap-1 " to="/">
            <img
              className=" xl:w-[60px] w-[40px] pt-1 "
              src={logo}
              alt="logo"
            />
            <span className=" xl:text-4xl text-2xl   font-bold">
              BIKE<span className="text-[#ff950a]">RIDERZ</span>
            </span>
          </Link>
        </div>

        <div className={`flex items-center`}>
          <ul className="flex">
            {Links.map((link) => (
              <li
                key={link.name}
                className="xl:pl-8 pl-6  lg:text-lg text-base xl:py-6 py-4 cursor-pointer relative group transition-all duration-500 ease-in-out"
              >
                <Link to={link.link} className="relative  w-full h-full">
                  {link.name}

                  <span
                    className={` absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-[#ff950a] transition-all duration-500 ease-in-out top-7 group-focus:w-full ${
                      location.pathname === link.link ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex items-center xl:space-x-4 space-x-3 ">
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="w-10 h-10 cursor-pointer bg-transparent hover:bg-[#ff950a] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2 text-gray-700 hover:text-white">
                  <UserRound className="w-8 h-8 " />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="xl:w-[170px] w-[160px] xl:text-base text-sm text-center ">
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
                    <Link to={"signup"}>
                      <p className="hover:text-[#ff950a]  cursor-pointer">
                        SIGNUP
                      </p>
                    </Link>
                  </div>
                )}
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="w-10 h-10 cursor-pointer hover:bg-[#ff950a] rounded-full transition-all  duration-500 hover:scale-110 ease-in-out flex items-center justify-center p-2 text-gray-700 hover:text-white">
            <Heart className="w-8 h-8 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XlNavbar;
