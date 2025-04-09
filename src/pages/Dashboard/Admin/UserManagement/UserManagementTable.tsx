import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/User Api/userApi";
import { Tuser } from "@/types/Types";
import { toast } from "sonner";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
import { useRef } from "react";

const UserManagementTable = ({ role }: { role: string }) => {
  const { data: users, isLoading } = useGetAllUserQuery({ role });
  const [updateUser] = useUpdateUserMutation();
  // Using a ref to store loading states for each user (avoids re-rendering)
  const loadingRef = useRef<{ [key: string]: boolean }>({});
  //This is a TypeScript type annotation that describes the structure of the object that loadingRef will hold. { [key: string]: boolean } means:The object is a dictionary where the keys are strings ([key: string]), and The values are booleans (boolean). You initialize loadingRef with an empty object ({}). This means when the component first renders, there are no loading states yet.

  const handleChangeRole = async (user: Tuser) => {
    // Toggle between 'admin' and 'user'
    const newRole = user.role === "admin" ? "user" : "admin";

    // Set loading state for this user
    loadingRef.current[user._id] = true;

    const payload: Partial<Tuser> = {
      role: newRole,
    };

    try {
      const result = await updateUser({ id: user._id, ...payload }).unwrap();
      if (result) {
        toast.success(`Role updated to ${newRole} successfully`);
      }
    } catch (err) {
      toast.error("Failed to update role");
      console.log(err);
    } finally {
      // Reset loading state
      loadingRef.current[user._id] = false;
    }
  };

  return (
    <div className="xl:w-full w-[850px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-lg">Name</TableHead>
            <TableHead className="font-bold text-lg">Email</TableHead>
            <TableHead className="font-bold text-lg">Phone</TableHead>
            <TableHead className="font-bold text-lg">Address</TableHead>
            <TableHead className="font-bold text-lg">Role</TableHead>
            <TableHead className="font-bold text-lg">Edit Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center pt-20">
                <div className="  flex items-center justify-center w-full h-14 ">
                  <Lottie animationData={spinner} loop={true} />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            users?.data?.map((user: Tuser) => (
              <TableRow key={user?._id}>
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.phone}</TableCell>
                <TableCell>{user?.address}</TableCell>
                <TableCell>{user?.role}</TableCell>

                <TableCell>
                  {loadingRef.current[user?._id] ? (
                    <div className="border border-[#ff950a] shadow-xl flex items-center justify-center w-[120px] h-12 p-3">
                      <Lottie animationData={spinner} loop={true} />
                    </div>
                  ) : (
                    <button
                      className="flex text-sm items-center justify-center gap-2 bg-[#ffa633] text-white w-[120px] h-11 p-3 relative group overflow-hidden"
                      onClick={() => handleChangeRole(user)}
                    >
                      <span className="relative z-10">Change Role</span>
                      <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagementTable;
