import { useGetMyAllBookingsQuery } from "@/redux/api/BookingApi/bookingApi";
import { useState } from "react";
import { TBooking } from "@/types/Types";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";
import { bookingNow } from "@/redux/features/BookNow/bookNow";
const MyRentals = () => {
  const { data: myRentals, isLoading } = useGetMyAllBookingsQuery("");
  const [activeTab, setActiveTab] = useState("unpaid");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  console.log(myRentals);
  const handlePayment = (rent: TBooking) => {
    dispatch(
      bookingNow({
        bookingId: rent._id,
        totalCost: rent.totalCost,
      })
    );
    console.log("rentid:", rent._id);
    // Navigate after dispatching
    navigate("/checkout");
  };

  return (
    <div className=" m-10 ">
      <div className="bg-white shadow-md w-full p-8">
        <h1 className="text-2xl font-bold">MY RENTALS</h1>
      </div>

      <div className="bg-white shadow-md w-full  px-8 pt-8 pb-16 mt-12 overflow-x-scroll ">
        <div className="relative flex md:gap-16 sm:gap-8 gap-5 items-center">
          <div
            className={`relative cursor-pointer ${
              activeTab === "unpaid" ? "text-underline-color" : "text-gray-400"
            }`}
            onClick={() => handleTabClick("unpaid")}
          >
            <p className="md:text-2xl sm:text-lg text-[15px] font-bold pb-2">
              Unpaid
            </p>
            {activeTab === "unpaid" && (
              <div className="absolute bg-[#ff950a] left-0 bottom-0 w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
            )}
          </div>

          <div
            className={`relative cursor-pointer ${
              activeTab === "paid" ? "text-underline-color" : "text-gray-400"
            }`}
            onClick={() => handleTabClick("paid")}
          >
            <p className="md:text-2xl sm:text-lg text-[15px] font-bold pb-2">
              Paid
            </p>

            {activeTab === "paid" && (
              <div className="absolute left-0 bottom-0 bg-[#ff950a] w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
            )}
          </div>
        </div>

        <div className="mt-10">
          {activeTab === "unpaid" ? (
            <div className="xl:w-full w-[850px] ">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className=" font-bold text-lg">Bike</TableHead>
                    <TableHead className=" font-bold text-lg">
                      Start Time
                    </TableHead>
                    <TableHead className=" font-bold text-lg">
                      Return Time
                    </TableHead>
                    <TableHead className=" font-bold text-lg">
                      Total Cost
                    </TableHead>
                    <TableHead className=" font-bold text-lg">Status</TableHead>
                    <TableHead className=" font-bold text-lg">
                      Actions
                    </TableHead>
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
                    myRentals?.data
                      ?.filter((rent: TBooking) => !rent?.isPaid)
                      .map((rent: TBooking, index: number) => (
                        <TableRow key={rent._id || `unpaid-${index}`}>
                          ?<TableCell>{rent?.bikeId.name}</TableCell>
                          <TableCell className="">
                            {new Date(rent?.startTime).toLocaleString()}
                          </TableCell>
                          <TableCell className="">
                            {rent?.isReturned
                              ? new Date(rent?.returnTime).toLocaleString()
                              : "Not Returned"}
                          </TableCell>
                          <TableCell className="">
                            {rent?.totalCost}Tk
                          </TableCell>
                          <TableCell className="text-red-500">
                            ${!rent?.isPaid ? "Unpaid" : ""}
                          </TableCell>
                          <TableCell className="">
                            <button
                              className="flex text-sm items-center justify-center gap-2 bg-[#ffa633] text-white w-[120px] h-11 p-3 relative group overflow-hidden"
                              onClick={() => handlePayment(rent)}
                              disabled={rent?.returnTime === null}
                              title={
                                rent?.returnTime === null
                                  ? "Return Time has not been submitted yet "
                                  : ""
                              }
                            >
                              <span className="relative z-10">Pay Now</span>
                              <span className="relative z-10">
                                <CreditCard />
                              </span>
                              <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))
                  )}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="xl:w-full w-[850px] ">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className=" font-bold text-lg">Bike</TableHead>
                    <TableHead className=" font-bold text-lg">
                      Start Time
                    </TableHead>
                    <TableHead className=" font-bold text-lg">
                      Return Time
                    </TableHead>
                    <TableHead className=" font-bold text-lg">
                      Total Cost
                    </TableHead>
                    <TableHead className=" font-bold text-lg">Status</TableHead>
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
                    myRentals?.data
                      ?.filter((rental: TBooking) => rental?.isPaid)
                      .map((rental: TBooking, index: number) => (
                        <TableRow key={rental?._id || `paid-${index}`}>
                          <TableCell>{rental?.bikeId.name}</TableCell>
                          <TableCell>
                            {new Date(rental?.startTime).toLocaleString()}
                          </TableCell>
                          <TableCell>
                            {rental?.isReturned
                              ? new Date(rental?.returnTime).toLocaleString()
                              : "Not Returned"}
                          </TableCell>
                          <TableCell>${rental?.totalCost}</TableCell>
                          <TableCell className="text-green-500">
                            ${rental?.isPaid ? "Paid" : ""}
                          </TableCell>
                        </TableRow>
                      ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRentals;
