import Lottie from "lottie-react";
import bikelottie from "@/assets/lottie/bikelottie.json";

const LoadingPage = () => {
  return (
    <div className=" flex flex-col  h-full relative group bg-[#f5f5f5] bg-opacity-50 w-full z-50">
      <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
        <Lottie animationData={bikelottie} loop={true} />
      </div>
    </div>
  );
};

export default LoadingPage;
