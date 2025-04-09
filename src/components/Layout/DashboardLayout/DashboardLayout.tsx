import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 bg-[#eff2f6] absolute w-full">
      <div className="bg-[#374462] xl:col-span-2 col-span-3  w-full h-screen sticky top-0 left-0 overflow-auto   text-white shadow-xl lg:block hidden">
        <Sidebar />
      </div>
      <div className="xl:col-span-10 lg:col-span-9 col-span-full    w-full ">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
