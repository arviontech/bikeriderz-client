import paymentbg from "@/assets/checkout/payment-2.jpg";
import Container from "@/components/Shared/Container";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { resetBooking } from "@/redux/features/BookNow/bookNow";
import {
  useCreateBookingsMutation,
  useUpdateIsPaidMutation,
} from "@/redux/api/BookingApi/bookingApi";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
import bkash from "@/assets/checkout/bkash.png";
import rocket from "@/assets/checkout/rocket.png";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [booking, { isLoading }] = useCreateBookingsMutation();
  const [payTotalCost, { isLoading: ispaidLoading }] =
    useUpdateIsPaidMutation();
  const { bikeId, startTime, advancedPayment, bookingId, totalCost } =
    useAppSelector((store) => store.bookNow);
  const dispatch = useAppDispatch();

  const handlePaymentMethod = (value: string) => {
    setPaymentMethod(value);
  };

  const handleBooking = async () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions.");
      return;
    }

    if (bookingId) {
      //Existing booking pay without advanced payment
      try {
        const res = await payTotalCost({ id: bookingId }).unwrap();
        if (res?.success) {
          toast.success(
            "Payment successful. Your rental has been moved to the Paid tab."
          );
          dispatch(resetBooking());
          setPaymentMethod(null);
          setTermsAccepted(false);
        }
      } catch (error) {
        console.error("Payment error:", error);
        toast.error("Failed to process payment.");
      }
    } else {
      // New booking logic with advanced payment
      const data = {
        bikeId,
        startTime,
        advancedPayment,
      };
      try {
        const res = await booking(data).unwrap();
        if (res?.success) {
          toast.success("Booking successful. Check your Dashboard.");
          dispatch(resetBooking());
          setPaymentMethod(null);
          setTermsAccepted(false);
        }
      } catch (error) {
        console.error("Booking error:", error);
        toast.error("Failed to create booking.");
      }
    }
  };

  return (
    <div className="mb-28">
      <div className="relative mb-20">
        <img
          className="object-cover md:h-[500px] h-[400px] w-full"
          src={paymentbg}
          alt=""
        />
        <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
        <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#ff950a] w-16 h-1"></span>
          <h1 className="lg:text-4xl text-2xl text-white font-bold ">
            CHECKOUT
          </h1>
          <span className="bg-[#ff950a] w-16 h-1"></span>
        </div>
      </div>

      <Container>
        <div className=" shadow-md bg-[#fffafa]  border border-gray-500 p-6 md:w-[600px] sm:w-[400px] w-full mx-auto mt-8">
          <div>
            <RadioGroup
              value={paymentMethod || ""}
              onValueChange={handlePaymentMethod}
            >
              <div className="flex items-center text-lg pt-3 space-x-2">
                <RadioGroupItem value="cashon" id="r1" />
                <Label htmlFor="r2">rocket Payment</Label>
                <img src={rocket} alt="" className="w-10 h-10" />
              </div>
              <div className="flex items-center text-lg pt-4 space-x-2">
                <RadioGroupItem value="bKash" id="r2" />
                <Label htmlFor="r2">bKash Payment</Label>
                <img src={bkash} alt="" className="w-8 h-8" />
              </div>
            </RadioGroup>
          </div>
          <p className="py-8 text-base">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <span className="text-[#ff950a] underline underline-offset-1 cursor-pointer">
              privacy policy
            </span>
            .
          </p>

          <div className="border border-[#ff950a] w-full p-4 flex items-center justify-between mb-10">
            <p className="text-base font-semibold">Advanced Payment:</p>
            <p className="text-base font-semibold">{advancedPayment} tk</p>
          </div>
          <div className="border border-[#ff950a] w-full p-4 flex items-center justify-between mb-10">
            <p className="text-base font-semibold">Total Cost:</p>
            <p className="text-base font-semibold">{totalCost} tk</p>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have read and agree to the website{" "}
              <span className="text-[#ff950a] underline underline-offset-1 cursor-pointer">
                terms and conditions
              </span>
            </label>
          </div>

          <div className="my-8 ">
            {(bookingId ? ispaidLoading : isLoading) ? (
              <div className="w-full border border-[#ff950a] shadow-xl mt-4 flex items-center justify-center h-16">
                <Lottie animationData={spinner} loop={true} />
              </div>
            ) : (
              <button
                className="flex text-xl items-center justify-center bg-[#ffa633] text-white w-full h-14   relative group overflow-hidden"
                onClick={handleBooking}
              >
                <span className="relative z-10">
                  {bookingId ? "Pay Now" : "Proceed To Booking"}
                </span>
                <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
