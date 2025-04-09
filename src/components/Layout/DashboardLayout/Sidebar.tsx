import { useState } from "react";
import { Link } from "react-router-dom";

import { BookmarkPlus, LineChart, SquarePen, Undo2, User } from "lucide-react";
import { useAppSelector } from "@/redux/hook";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  const [activeLink, setActiveLink] = useState<string>("/admin-dashboard");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <aside className=" ">
      <div>
        <div className="h-[79px] ">
          <div className="pt-4 pl-2">
            <Link className="flex items-center justify-center " to="/">
              <span className="  text-2xl text-white  font-bold">
                BIKE<span className="text-[#ff950a]">RIDERZ</span>
              </span>
            </Link>
          </div>
        </div>
        <hr className="opacity-30" />
        <div className="p-2">
          {user?.role === "user" ? (
            <div className="mt-3 px-4">
              <h1 className=" text-white  pt-3 pb-3">User Dashboard</h1>
              <ul className="flex flex-col gap-7  border border-[#113969]   py-6">
                <Link to="/user-dashboard">
                  <li
                    className={` flex items-center gap-2 text-sm text-white ${
                      activeLink === "/user-dashboard"
                        ? " bg-[#5b6f9c] w-full pl-2 py-2"
                        : "w-full pl-2 "
                    }`}
                    onClick={() => handleLinkClick("/user-dashboard")}
                  >
                    <span>
                      <User />
                    </span>{" "}
                    Porfile
                  </li>
                </Link>

                <Link to="/user-dashboard/my-rentals">
                  <li
                    className={` flex items-center gap-2 text-sm text-white ${
                      activeLink === "/user-dashboard/my-rentals"
                        ? " bg-[#5b6f9c] w-full pl-2 py-2"
                        : "w-full pl-2 "
                    }`}
                    onClick={() =>
                      handleLinkClick("/user-dashboard/my-rentals")
                    }
                  >
                    <span>
                      <BookmarkPlus />
                    </span>{" "}
                    My Rentals
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <div className="mt-3 px-4">
              <h1 className=" text-white  pt-3 pb-3">Admin Dashboard</h1>
              <ul className="flex flex-col gap-7  border border-[#113969]  pt-4 pb-4">
                <Link to="/admin-dashboard">
                  <li
                    className={` flex items-center gap-2 text-sm text-white ${
                      activeLink === "/admin-dashboard"
                        ? " bg-[#5b6f9c] w-full pl-2 py-2"
                        : "w-full pl-2 "
                    }`}
                    onClick={() => handleLinkClick("/admin-dashboard")}
                  >
                    <span>
                      <LineChart />
                    </span>{" "}
                    Insight
                  </li>
                </Link>

                <Link to="/admin-dashboard/admin-profile">
                  <li
                    className={` flex items-center gap-2 text-sm text-white ${
                      activeLink === "/admin-dashboard/admin-profile"
                        ? " bg-[#5b6f9c] w-full pl-2 py-2"
                        : "w-full pl-2 "
                    }`}
                    onClick={() =>
                      handleLinkClick("/admin-dashboard/admin-profile")
                    }
                  >
                    <span>
                      <User />
                    </span>{" "}
                    Profile
                  </li>
                </Link>

                <Link to="/admin-dashboard/manage-bikes">
                  <li
                    className={` flex items-center gap-2 text-sm text-white ${
                      activeLink === "/admin-dashboard/manage-bikes"
                        ? " bg-[#5b6f9c] w-full pl-2 py-2"
                        : "w-full pl-2 "
                    }`}
                    onClick={() =>
                      handleLinkClick("/admin-dashboard/manage-bikes")
                    }
                  >
                    <span>
                      <SquarePen />
                    </span>
                    Manage Bikes
                  </li>
                </Link>

                <Link to="/admin-dashboard/return-bike">
                  <li
                    className={` flex items-center gap-2 text-sm text-white ${
                      activeLink === "/admin-dashboard/return-bike"
                        ? " bg-[#5b6f9c] w-full pl-2 py-2"
                        : "w-full pl-2 "
                    }`}
                    onClick={() =>
                      handleLinkClick("/admin-dashboard/return-bike")
                    }
                  >
                    <span>
                      <Undo2 />
                    </span>
                    Return Bikes
                  </li>
                </Link>
              </ul>
            </div>
          )}

          <div className=" flex items-center justify-center pt-28 pb-3">
            <Link to="/">
              {" "}
              <button className="bg-[#ff950a] text-xs md:text-sm text-white  h-[40px] w-[100px] md:w-[130px] md:h-[42px]">
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
