import { useGetAllBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import { useGetAllBookingsQuery } from "@/redux/api/BookingApi/bookingApi";
import { useGetAllUserQuery } from "@/redux/api/User Api/userApi";
import { TBooking } from "@/types/Types";
import { BadgeDollarSign, Bike, BookmarkCheck } from "lucide-react";
import { FaUsers } from "react-icons/fa6";
import UserManagement from "./UserManagement/UserManagement";

const AdminDashboard = () => {
  const { data } = useGetAllBikesQuery(undefined);
  const { data: user } = useGetAllUserQuery({});
  const { data: bookings } = useGetAllBookingsQuery("");
  const getAllBikes = data?.data?.bikes || [];
  const getAllUser = user?.data || [];
  const getAllBookings = bookings?.data?.booking || [];
  const totalBalance = getAllBookings.reduce(
    (acc: number, booking: TBooking) => acc + booking.totalCost,
    0
  );

  // Array of card data
  const cardData = [
    {
      icon: <Bike className="xl:w-12 xl:h-12 w-10 h-10 text-white" />,
      value: getAllBikes.length,
      label: "Total Bikes",
    },
    {
      icon: <FaUsers className="xl:w-12 xl:h-12 w-10 h-10 text-white" />,
      value: getAllUser.length,
      label: "Total Users",
    },
    {
      icon: <BookmarkCheck className="xl:w-12 xl:h-12 w-10 h-10 text-white" />,
      value: getAllBookings.length,
      label: "Total Bookings",
    },
    {
      icon: (
        <BadgeDollarSign className="xl:w-12 xl:h-12 w-10 h-10 text-white" />
      ),
      value: `${totalBalance.toFixed(2)} Tk`,
      label: "Total Balance",
    },
  ];

  return (
    <div className="my-12 mx-8">
      <div className="flex md:flex-row flex-col gap-8 items-center justify-center">
        {cardData?.map((card, index) => (
          <div
            key={index}
            className="xl:w-[280px] xl:h-[200px] md:w-[320px] w-[300px] h-[220px] py-5 bg-white shadow-md border-t-2 border-[#8baaf3] flex flex-col items-center justify-center"
          >
            <div className="bg-[#2b2b5e] rounded-full p-3">{card?.icon}</div>
            <p className="xl:text-2xl text-xl font-bold pt-4 pb-2">
              {card?.value}
            </p>
            <p className="text-base text-gray-500">{card?.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;
