import bg from "@/assets/blog/blog2.jpg";
import Container from "@/components/Shared/Container";
import LoadingPage from "@/components/Shared/LoadingPage";
import { useGetSingleBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import { LifeBuoy, Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaBolt,
  FaBookmark,
  FaCompactDisc,
  FaHandPointer,
  FaMagnifyingGlass,
  FaMotorcycle,
  FaSafari,
} from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import sectionbg from "@/assets/hero-bg/vectorBg.jpg";
import user from "@/assets/testimonials/user1.jpg";
import { useAppDispatch } from "@/redux/hook";
import { bookingNow } from "@/redux/features/BookNow/bookNow";
import { DialogTitle } from "@radix-ui/react-dialog";
type bookingInput = {
  startTime: string;
};

const SingleProduct = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleBikesQuery(id);
  const dispatch = useAppDispatch();

  const item = data?.data;
  useEffect(() => {
    // Reset the selected image whenever the id changes
    if (item && item?.image?.length > 0) {
      setSelectedImage(item.image[0]);
    }
  }, [id, item]);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const { register, handleSubmit } = useForm<bookingInput>();

  const onSubmit: SubmitHandler<bookingInput> = (formData) => {
    // Convert local datetime to ISO 8601 format
    const startTimeISO = new Date(formData.startTime).toISOString();
    console.log(startTimeISO);

    const bike = {
      bikeId: id || "",
      startTime: startTimeISO,
    };
    dispatch(bookingNow(bike));
    navigate("/checkout");
  };

  const bikeDetails = [
    {
      id: 1,
      icon: (className: string) => <FaSafari className={className} />,
      title: "Mileage",
      data: (className: string) => (
        <span className={className}>{item?.mileage} Kmpl</span>
      ),
    },
    {
      id: 2,
      icon: (className: string) => <FaBolt className={className} />,
      title: "Power",
      data: (className: string) => (
        <span className={className}>{item?.power} BHP</span>
      ),
    },
    {
      id: 3,
      icon: (className: string) => <LifeBuoy className={className} />,
      title: "Tyre",
      data: (className: string) => (
        <span className={className}>{item?.tyreType}</span>
      ),
    },
    {
      id: 4,
      icon: (className: string) => <FaCompactDisc className={className} />,
      title: "Brakes",
      data: (className: string) => (
        <span className={className}>{item?.brakeType}</span>
      ),
    },
  ];

  const rentalProcess = [
    {
      title: "SEARCH",
      icon: (className: string) => <FaMagnifyingGlass className={className} />,
      description: "Find the bike you want from our wide range of options.",
    },
    {
      title: "SELECT",
      icon: (className: string) => <FaHandPointer className={className} />,
      description: "Choose the bike that fits your style and needs.",
    },
    {
      title: "BOOKING",
      icon: (className: string) => <FaBookmark className={className} />,
      description: "Easily book the bike with a few simple clicks.",
    },
    {
      title: "RIDE",
      icon: (className: string) => <FaMotorcycle className={className} />,
      description: "Enjoy your ride and experience the freedom of the road!",
    },
  ];

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="mb-32">
      <div className="relative mb-20">
        <div>
          <img
            className="object-cover md:h-[500px] h-[400px] w-full"
            src={bg}
            alt=""
          />
          <div className="bg-black opacity-45 md:h-[500px] h-[400px] w-full absolute top-0 z-1"></div>
          <div className="flex items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#ff950a] w-16 h-1"></span>
            <h1 className="lg:text-4xl text-2xl text-white font-bold text-center">
              PRODUCT DETAILS
            </h1>
            <span className="bg-[#ff950a] w-16 h-1"></span>
          </div>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-12 lg:gap-10 gap-5 xl:px-0 px-3">
          <div className="md:col-span-6 col-span-full  order-1">
            <div className="flex  flex-col  gap-10">
              <div className="w-full flex item-center justify-center">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="xl:h-[470px] lg:h-[400px] md:h-[320px] sm:h-[350px] h-[280px] w-full mx-auto object-cover object-center"
                />
              </div>
              <div className="flex items-center justify-center  gap-4">
                {item?.image?.map((imgSrc: string, index: number) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center mb-5 border ${
                      selectedImage === imgSrc
                        ? "border-[#ff950a] border-4"
                        : "border-[#ffa633] border-1"
                    } cursor-pointer`}
                    onClick={() => handleImageClick(imgSrc)}
                  >
                    <img
                      src={imgSrc}
                      alt={`Image ${index + 1}`}
                      className="w-[120px] h-[90px] object-cover object-center  mx-auto p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-full order-2">
            <p className="lg:text-2xl text-xl font-bold pb-2">{item?.name}</p>
            <div className="flex items-center  pb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="lg:size-5 size-[18px]"
                  color="orange"
                  fill="orange"
                />
              ))}
            </div>
            <p className="lg:text-2xl text-xl font-bold text-[#ff950a] pb-4">
              ${item?.pricePerHour}{" "}
              <span className="text-gray-500 font-normal text-xl">/ Hour</span>
            </p>
            <p className="lg:text-base text-sm text-gray-500 pb-5 ">
              {item?.description?.length > 100
                ? `${item?.description?.slice(0, 190)}...`
                : item?.description}
            </p>
            <div className="mt-6 mb-10 ">
              <ul className="list-disc pl-5 space-y-3">
                <li className="md:text-xl textlg font-semibold">
                  Brand: <span className=" font-normal">{item?.brand}</span>
                </li>
                <li className="md:text-xl textlg font-semibold">
                  Model: <span className=" font-normal">{item?.model}</span>
                </li>
                <li className="md:text-xl textlg font-semibold">
                  Made In: <span className=" font-normal">{item?.madeIn}</span>
                </li>
                <li className="md:text-xl textlg font-semibold">
                  Year: <span className=" font-normal">{item?.year}</span>
                </li>
                <li className="md:text-xl textlg font-semibold">
                  Availability:{" "}
                  {item?.isAvailable ? (
                    <span className=" font-normal">Available</span>
                  ) : (
                    <span className="text-red-600 font-normal">Rented</span>
                  )}
                </li>
              </ul>
            </div>

            <div className="flex xl:gap-8 sm:gap-5 gap-3 mb-12">
              {bikeDetails?.map((bike) => (
                <div
                  className="bg-[#ff950a] md:w-24 w-[100px] h-28 rounded-lg  text-white flex flex-col items-center justify-center gap-1 shadow-lg py-3"
                  key={bike?.id}
                >
                  <span>{bike?.icon("w-8 h-8 text-white")}</span>
                  <p className="text-sm">{bike?.title}</p>
                  <p className="lg:text-base text-sm">
                    {bike?.data("text-white")}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="flex lg:text-xl text-lg items-center justify-center bg-[#ffa633] text-white lg:w-[150px] w-[130px] h-14 p-3  relative group overflow-hidden"
                    disabled={item?.isAvailable === false}
                    title={
                      item?.isAvailable === false
                        ? "Bike is already on rent"
                        : ""
                    }
                  >
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Booking Info.</DialogTitle>
                    <DialogDescription>
                      Please enter the start time to start your booking process.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" py-4">
                      <div className="w-full">
                        <input
                          type="datetime-local"
                          {...register("startTime", { required: true })}
                          className="w-full h-12 px-4 py-2 border border-[#ff950a] cursor-pointer focus:outline-none focus:border-[#ffa633] text-base justify-between"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <button
                        className="flex text-sm items-center justify-center bg-[#ffa633] text-white w-[120px] h-11 p-3  relative group overflow-hidden"
                        type="submit"
                        disabled={item?.isAvailable === false}
                      >
                        <span className="relative z-10">Pay Now</span>
                        <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                      </button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </Container>

      <div
        className=" w-full mt-28 py-20 xl:px-0 px-4"
        style={{ backgroundImage: `url(${sectionbg})` }}
      >
        <Container>
          <div className="relative flex md:gap-16 sm:gap-8 gap-5 items-center">
            <div
              className={`relative cursor-pointer ${
                activeTab === "description"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("description")}
            >
              <p className="md:text-xl sm:text-lg text-[15px] font-bold pb-2">
                Description
              </p>
              {activeTab === "description" && (
                <div className="absolute bg-[#ff950a] left-0 bottom-0 w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>

            <div
              className={`relative cursor-pointer ${
                activeTab === "process"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("process")}
            >
              <p className="md:text-xl sm:text-lg text-[15px] font-bold pb-2">
                Process
              </p>

              {activeTab === "process" && (
                <div className="absolute left-0 bottom-0 bg-[#ff950a] w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>
            <div
              className={`relative cursor-pointer ${
                activeTab === "reviews"
                  ? "text-underline-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("reviews")}
            >
              <p className="md:text-xl sm:text-lg text-[15px] font-bold pb-2">
                Reviews
              </p>

              {activeTab === "reviews" && (
                <div className="absolute left-0 bottom-0 bg-[#ff950a] w-full h-1 bg-underline-color transition-transform duration-300 transform scale-x-100" />
              )}
            </div>
          </div>

          <div className="mt-10">
            {activeTab === "description" && item && (
              <div className="md:p-10 p-2">
                <p className="text-base  pb-12 ">{item?.description}</p>
                <div className="md:w-[600px] w-full  border-gray-300 border mb-10">
                  <ul>
                    <li className="text-[#ff950a] text-xl bg-white w-full py-3 pl-4 border-gray-200  border-[1px]">
                      Bike Engine
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Engine Type:{" "}
                      <span className="font-normal">{item?.engineType}</span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold bg-white">
                      CC: <span className="font-normal">{item?.cc} Cc</span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold ">
                      Power:{" "}
                      <span className="font-normal">{item?.power} BHP</span>
                    </li>
                    <li className="bg-white  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold ">
                      Engine Coling:{" "}
                      <span className="font-normal">{item?.engineCooling}</span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold ">
                      No Of Cylinders:{" "}
                      <span className="font-normal">{item?.noOfCylinders}</span>
                    </li>
                    <li className="bg-white  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold ">
                      Starting Method:{" "}
                      <span className="font-normal">
                        {item?.startingMethod}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-[600px] w-full  border-gray-300 border mb-10">
                  <ul>
                    <li className="text-[#ff950a] text-xl bg-white w-full py-3 pl-4 border-gray-200  border-[1px]">
                      Brakes
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Front Brake Type:{" "}
                      <span className="font-normal">{item?.brakeType}</span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Anti-Lock Braking System:{" "}
                      <span className="font-normal">{item?.abs}</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-[600px] w-full  border-gray-300 border mb-10">
                  <ul>
                    <li className="text-[#ff950a] text-xl bg-white w-full py-3 pl-4 border-gray-200  border-[1px]">
                      Electricals Light
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Battery Type:{" "}
                      <span className="font-normal">{item?.batteryType}</span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Battery Voltage:{" "}
                      <span className="font-normal">
                        {item?.batteryVoltage} V
                      </span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Head Lamp:{" "}
                      <span className="font-normal">{item?.headLamp}</span>
                    </li>
                    <li className="  w-full py-3 pl-4 border-gray-200  border-[1px] text-base font-bold">
                      Indicators:{" "}
                      <span className="font-normal">{item?.indicator}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "process" && (
              <div>
                <p className="lg:text-4xl md:text-3xl text-2xl font-bold text-center  md:p-10 p-6 ">
                  See How It Works
                </p>
                <div className="grid  grid-cols-1 lg:grid-cols-4 gap-6 px-4">
                  {rentalProcess.map((step, index) => (
                    <div
                      key={index}
                      className="bg-[#ff950a] text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-center mb-4">
                        {step.icon("text-5xl")}
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">
                        {step.title}
                      </h3>
                      <p className="text-center">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <p className="lg:text-2xl text-xl font-bold md:pt-10 pt-3">
                  Customer Reviews
                </p>
                <div className="flex items-center  py-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="lg:size-6 size-[20px]"
                      color="orange"
                      fill="orange"
                    />
                  ))}
                </div>
                <div className="flex items-center  pb-12 pt-1">
                  <span className="bg-[#ff950a] w-28 h-1"></span>
                  <hr className="bg-[#6f7276] w-full" />
                </div>
                <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                  <div className="flex flex-col md:items-center items-start md:justify-center justify-start gap-1">
                    <img src={user} className="w-14 h-14 rounded-full" alt="" />
                    <p className="text-base font-semibold">Halinson</p>
                    <div className="flex items-center  ">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="md:size-4 size-[18px]"
                          color="orange"
                          fill="orange"
                        />
                      ))}
                    </div>
                    <p className="text-sm">17/8/2014</p>
                  </div>

                  <div>
                    <p className="text-base font-semibold pb-2">
                      Very Comfortable
                    </p>
                    <p className="text-sm">
                      If you can avoid getting hung up on needing to have a
                      brand name on your sneak, give these a try. A friend of
                      mine has many foot problems and his podiatrist suggested
                      these shoes. He sang their praises when he bought a pair
                      and has since bought several more. I haven't been happy
                      with my walking shoes so I ordered a pair and now I'm a
                      fan. I have a slightly wide foot so if I bought a regular
                      size in a Sketcher it was too narrow. When I went to a
                      wide it was too wide. The Fitville is the perfect width in
                      a wide size and they are well made and very comfortable.
                      The price is right and I now own three pair!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleProduct;
