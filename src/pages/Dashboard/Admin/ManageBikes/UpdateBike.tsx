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
import { bikeFields } from "./BikeFormFileds";
import OptionalInputField from "@/pages/InputFields/OptionalInputFiled";
import { useUpdateBikeMutation } from "@/redux/api/BikeApi/bikeApi";
import { FilePenLine } from "lucide-react";

const UpdateBike = ({ bike }: { bike: TBike }) => {
  const [updateBike, { isLoading }] = useUpdateBikeMutation();
  const { register, handleSubmit, reset } = useForm<TBike>();

  const onSubmit: SubmitHandler<TBike> = async (data) => {
    const payload: Partial<TBike> = {
      ...data,
      ...(data.pricePerHour && { pricePerHour: Number(data.pricePerHour) }),
      ...(data.cc && { cc: Number(data.cc) }),
      ...(data.year && { year: Number(data.year) }),
    };

    const option = {
      data: payload,
      id: bike._id,
    };
    console.log(option);

    try {
      const result = await updateBike(option).unwrap();
      if (result) {
        toast.success("Bike fields are updated successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update the bike");
    } finally {
      reset(); // Clear the form after updating
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center justify-center rounded-md bg-[#24eb45] p-3 relative group overflow-hidden">
            <FilePenLine className="text-white w-5 h-5 z-10" />
            <span className="absolute inset-0 bg-[#14b12e] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[470px] overflow-y-scroll xl:h-[550px] h-[450px]">
          <DialogHeader>
            <DialogTitle>Update A Bike</DialogTitle>
            <DialogDescription>
              Provide updated bike details. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            {bikeFields?.map(({ name, label, placeholder, type }) => {
              const value = bike[name as keyof TBike];

              return (
                <OptionalInputField<TBike>
                  key={name}
                  name={name as keyof TBike}
                  label={label}
                  placeholder={placeholder}
                  register={register}
                  type={type || "text"}
                  defaultValue={value}
                />
              );
            })}

            <DialogFooter>
              {isLoading ? (
                <div className="w-full border border-[#ff950a] shadow-xl mt-4 flex items-center justify-center h-16">
                  <Lottie animationData={spinner} loop={true} />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full text-white h-12 mt-4 text-xl relative group overflow-hidden flex items-center justify-center gap-2 bg-[#ffa633]"
                >
                  <span className="relative z-10">Update</span>
                  <span className="absolute inset-0 bg-[#ff950a] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                </button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateBike;
