import { SlidersHorizontal } from "lucide-react";
import UserManagementTable from "./UserManagementTable";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const UserManagement = () => {
  const [role, setRole] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRoleChange = (role: string) => {
    if (role === "all") {
      setRole(null); // Clear the role filter when "All" is selected
    } else {
      setRole(role);
    }
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-md w-full  overflow-x-scroll pb-12    relative">
      {/* Header Section */}
      <div className="flex items-center justify-between md:px-8 px-4 py-8 relative">
        <p className="sm:text-2xl text-xl font-bold">User List</p>
        <button
          className="flex text-lg items-center justify-center gap-2 bg-[#ffa633] text-white w-[120px] h-11 p-3 relative group overflow-hidden"
          onClick={toggleDropdown}
        >
          <span className="relative z-10">Filter</span>
          <SlidersHorizontal className="w-5 h-5 z-10" />
          <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
        </button>

        {/* Dropdown Modal */}
        <div
          className={`absolute top-10 right-0 border-t-2 border-[#ff2a2a]   w-[250px] h-[180px] bg-yellow-50 shadow-xl  rounded-md  p-6 transition-all duration-300 ease-in-out transform ${
            isDropdownOpen
              ? "opacity-100 scale-100 translate-y-9 "
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          } z-30`}
        >
          <p className="text-lg font-bold">Filter By User Role</p>
          <RadioGroup value={role || ""} onValueChange={handleRoleChange}>
            <div className="flex items-center text-base pt-3 space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center text-base pt-3 space-x-2">
              <RadioGroupItem value="admin" id="admin" />
              <Label htmlFor="admin">Admin</Label>
            </div>
            <div className="flex items-center text-base pt-3 space-x-2">
              <RadioGroupItem value="user" id="user" />
              <Label htmlFor="user">User</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* User Table Section */}
      <div className="md:px-8 px-4">
        <UserManagementTable role={role || ""} />
      </div>
    </div>
  );
};

export default UserManagement;
