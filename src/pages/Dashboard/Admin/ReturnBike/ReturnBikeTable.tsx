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
import { useReturnBikeMutation } from "@/redux/api/BookingApi/bookingApi";
import { toast } from "sonner";
import { useRef } from "react";
const ReturnBikeTable = ({
  bookings,
  isLoading,
}: {
  bookings: TBooking[];
  isLoading: boolean;
}) => {
  const [returnBike] = useReturnBikeMutation();
  // Using a ref to store loading states for each Booking data (avoids re-rendering)
  const loadingRef = useRef<{ [key: string]: boolean }>({});

  const handleReturnBike = async (id: string) => {
    // Set loading state for this booking
    loadingRef.current[id] = true;
    if (id) {
      try {
        const result = await returnBike(id).unwrap();
        if (result) {
          toast.success("Bike is returned successfully");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to return the bike");
      } finally {
        // Reset loading state
        loadingRef.current[id] = false;
      }
    }
  };

  return (
    <div className="xl:w-full w-[900px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-base">User Name</TableHead>
            <TableHead className="font-semibold text-base">Image</TableHead>
            <TableHead className="font-semibold text-base">Bike Name</TableHead>
            <TableHead className="font-semibold text-base">Brand</TableHead>
            <TableHead className="font-semibold text-base">Model</TableHead>
            <TableHead className="font-semibold text-base">
              PricePer Hour
            </TableHead>
            <TableHead className="font-semibold text-base">
              Start Time
            </TableHead>
            <TableHead className="font-semibold text-base">
              Return Time
            </TableHead>
            <TableHead className="font-semibold text-base">
              Total Cost
            </TableHead>
            <TableHead className="font-semibold text-base">
              Pay-Status
            </TableHead>
            <TableHead className="font-semibold text-base">Calculate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={11} className="text-center pt-20">
                <div className="  flex items-center justify-center w-full h-14 ">
                  <Lottie animationData={spinner} loop={true} />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            bookings?.map((booking: TBooking) => (
              <TableRow key={booking?._id}>
                <TableCell>{booking?.userId?.name}</TableCell>
                <TableCell>
                  <img
                    src={booking?.bikeId?.image[0]}
                    className="w-12 h-12 rounded-xl"
                    alt=""
                  />
                </TableCell>

                <TableCell>{booking?.bikeId?.name}</TableCell>
                <TableCell>{booking?.bikeId?.brand}</TableCell>
                <TableCell>{booking?.bikeId?.model}</TableCell>
                <TableCell>{booking?.bikeId?.pricePerHour}Tk</TableCell>
                <TableCell>
                  {new Date(booking?.startTime).toLocaleString()}
                </TableCell>
                <TableCell>
                  {booking.isReturned
                    ? new Date(booking?.returnTime).toLocaleString()
                    : "Not Returned"}
                </TableCell>

                <TableCell>{booking?.totalCost}Tk</TableCell>
                <TableCell
                  className={
                    booking?.isPaid ? "text-green-600" : "text-red-500"
                  }
                >
                  {booking?.isPaid ? "Paid" : "Unpaid"}
                </TableCell>

                <TableCell>
                  {loadingRef.current[booking?._id] ? (
                    <div className="border border-[#ff950a] shadow-xl flex items-center justify-center w-[110px] h-12 p-3">
                      <Lottie animationData={spinner} loop={true} />
                    </div>
                  ) : (
                    <button
                      className="flex text-sm items-center justify-center gap-2 bg-[#ffa633] text-white w-[110px] h-11 p-3 relative group overflow-hidden"
                      onClick={() => handleReturnBike(booking?._id)}
                      disabled={booking?.returnTime !== null}
                      title={
                        booking?.returnTime
                          ? "You have already got back your Bike "
                          : ""
                      }
                    >
                      <span className="relative z-10">Calculate</span>

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

export default ReturnBikeTable;
