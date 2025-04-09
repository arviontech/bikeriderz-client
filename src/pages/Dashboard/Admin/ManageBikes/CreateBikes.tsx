import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import Lottie from "lottie-react";
import spinner from "@/assets/lottie/spinner.json";
import { useForm, SubmitHandler } from "react-hook-form";
import { TBike } from "@/types/Types";
import InputField from "@/pages/InputFields/InputField";
import { useCreateBikeMutation } from "@/redux/api/BikeApi/bikeApi";
import { bikeFields } from "./BikeFormFileds";

const CreateBikes = () => {
  const [addBike, { isLoading }] = useCreateBikeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TBike>();

  const onSubmit: SubmitHandler<TBike> = async (data) => {
    const parseStringToArray = (str?: string) =>
      str?.split(",").map((item) => item.trim()) || [];
    //This function is designed to take a single string as input and convert it into an array of strings by splitting it at commas. It expects input like "image1.jpg,image2.jpg" and would return ["image1.jpg", "image2.jpg"].

    const option = {
      ...data,
      pricePerHour: Number(data.pricePerHour),
      cc: Number(data.cc),
      mileage: Number(data.mileage),
      topSpeed: Number(data.topSpeed),
      power: Number(data.power),
      year: Number(data.year),
      noOfCylinders: Number(data.noOfCylinders),
      fuelTankCapacity: Number(data.fuelTankCapacity),
      image: parseStringToArray(data.image as unknown as string),
      isAvailable: Boolean(data.isAvailable),
    };
    console.log(option);

    try {
      const result = await addBike(option).unwrap();
      console.log(result);

      if (result) {
        toast.success("Bike creation successful");
      }
    } catch (err) {
      toast.error("Failed to create bike");
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <div className=" ">
      <div className="pb-2 ">
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex text-lg font-semibold items-center justify-center gap-2  bg-[#ffa633] text-white w-[150px] h-14  relative group overflow-hidden">
              <span className="relative z-10">Create Bike</span>
              <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[470px] overflow-y-scroll xl:h-[600px] h-[450px]">
            <DialogHeader>
              <DialogTitle>Add A Bike</DialogTitle>
              <DialogDescription>
                Provide bike details. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              {bikeFields?.map(({ name, placeholder, type }) => (
                <InputField<TBike>
                  key={name}
                  name={name as keyof TBike}
                  placeholder={placeholder}
                  register={register}
                  errorMessage={errors[name as keyof TBike]?.message}
                  type={type || "text"}
                />
              ))}

              <DialogFooter>
                {isLoading ? (
                  <div className="w-full border border-[#ff950a] shadow-xl mt-4 flex items-center justify-center h-16">
                    <Lottie animationData={spinner} loop={true} />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full  text-white h-12 mt-4 text-xl relative group overflow-hidden flex  items-center justify-center gap-2 bg-[#ffa633]"
                  >
                    <span className="relative z-10">Add Bike</span>
                    <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateBikes;
