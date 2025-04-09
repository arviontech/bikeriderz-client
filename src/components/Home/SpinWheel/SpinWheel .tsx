import { useState } from "react";
import CouponModal from "./CouponModal";
import Container from "@/components/Shared/Container";

const discounts = [10, 20, 30, 40, 50]; // Discount percentages
const couponCodes = {
  10: "SAVE10",
  20: "SAVE20",
  30: "SAVE30",
  40: "SAVE40",
  50: "SAVE50",
};

const sectionColors = [
  "bg-red-500",
  "bg-blue-800",
  "bg-green-500",
  "bg-orange-600",
  "bg-purple-500",
];

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [spinAngle, setSpinAngle] = useState(0);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  const spinWheel = () => {
    if (spinning) return; // Avoid multiple spins at once
    setSpinning(true);

    // Randomly select a discount
    const randomIndex = Math.floor(Math.random() * discounts.length);
    const selected = discounts[randomIndex];

    // Calculate how much the wheel should spin
    const anglePerSection = 360 / discounts.length;
    const finalAngle = 360 * 5 + randomIndex * anglePerSection; // 5 full spins + random section

    // Apply the spin angle and store the selected discount
    setSpinAngle(finalAngle);
    setTimeout(() => {
      setCouponCode(couponCodes[selected as keyof typeof couponCodes]);
      setSpinning(false);
    }, 5000); // Stops spinning after 5 seconds
  };

  return (
    <Container className=" mb-32">
      <h1 className="xl:text-4xl md:text-3xl text-2xl text-center font-bold mb-6">
        Get Your Discount Coupon
      </h1>
      <p className="text-gray-500 text-base md:w-[600px] w-full text-center mx-auto mb-14">
        Spin the wheel at BikeRiderz and unlock exclusive discounts on your next
        bike rental. Whether for adventure or commuting, save big and enjoy the
        ride. Don’t miss your chance—spin now!
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="relative  rounded-full  shadow-2xl">
          <div
            className="relative rounded-full border-4 border-gray-400 overflow-hidden md:w-[500px] md:h-[500px] sm:w-[320px] sm:h-[320px] w-[280px] h-[280px]"
            style={{
              transform: `rotate(${spinAngle}deg)`,
              transition: "transform 5s cubic-bezier(0.33, 1, 0.68, 1)", // Smooth spin animation
            }}
          >
            {discounts.map((discount, index) => {
              const angle = (360 / discounts.length) * index;
              return (
                <div
                  key={discount}
                  className={`absolute w-full h-full ${sectionColors[index]}`}
                  style={{
                    transform: `rotate(${angle}deg)`,
                    clipPath: "polygon(50% 50%, 100% 0%, 100% 100%)", // Pie slice shape
                  }}
                >
                  <div
                    className="absolute  md:left-[80%] md:right-[15%] md:top-[36%] left-[65%] right-[5%] top-[20%] bottom-[28%] pt-20 text-white md:text-lg text-base font-bold pr-12 pl-7 "
                    style={{
                      transform: `rotate(-${angle}deg)`, // Counter-rotate the text to keep it upright
                    }}
                  >
                    {discount}%
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className={`${
                spinning ? "w-20 h-20 text-xs" : "w-16 h-16 text-base"
              } bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white`}
              onClick={spinWheel}
              disabled={spinning}
            >
              {spinning ? "Spinning..." : "Spin"}
            </button>
          </div>
        </div>

        <CouponModal
          couponCode={couponCode}
          onClose={() => setCouponCode(null)}
        />
      </div>
    </Container>
  );
};

export default SpinWheel;
