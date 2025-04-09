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
import { useState } from "react";
import { X } from "lucide-react";

const CreateBikes = () => {
  const [addBike, { isLoading }] = useCreateBikeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TBike>();

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);

      // Limit to 5 images (based on your maxCount in backend)
      const totalFiles = [...selectedImages, ...newFiles];
      if (totalFiles.length > 5) {
        toast.error("Maximum 5 images allowed");
        return;
      }

      // Create preview URLs
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

      setSelectedImages([...selectedImages, ...newFiles]);
      setPreviewImages([...previewImages, ...newPreviewUrls]);
    }
  };

  // Remove image
  const removeImage = (index: number) => {
    // Revoke object URL to prevent memory leaks
    URL.revokeObjectURL(previewImages[index]);

    const updatedImages = [...selectedImages];
    const updatedPreviews = [...previewImages];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedImages(updatedImages);
    setPreviewImages(updatedPreviews);
  };

  const onSubmit: SubmitHandler<TBike> = async (data) => {
    // Convert form data to FormData for file upload
    const formData = new FormData();

    // Add all bike data fields
    const bikeData = {
      ...data,
      pricePerHour: Number(data.pricePerHour),
      cc: Number(data.cc),
      mileage: Number(data.mileage),
      topSpeed: Number(data.topSpeed),
      power: Number(data.power),
      year: Number(data.year),
      noOfCylinders: Number(data.noOfCylinders),
      fuelTankCapacity: Number(data.fuelTankCapacity),
      isAvailable: Boolean(data.isAvailable),
    };

    // Append each field to formData
    // Object.entries(bikeData).forEach(([key, value]) => {
    //   formData.append(key, value as string);
    // });
    formData.append("data", JSON.stringify(bikeData));

    // Append each image to formData with the field name expected by backend
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const result = await addBike(formData).unwrap();

      if (result) {
        toast.success("Bike creation successful");

        // Clear image previews and selection
        previewImages.forEach((url) => URL.revokeObjectURL(url));
        setSelectedImages([]);
        setPreviewImages([]);

        reset();
      }
    } catch (err) {
      toast.error("Failed to create bike");
      console.error(err);
    }
  };

  return (
    <div className="">
      <div className="pb-2">
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex text-lg font-semibold items-center justify-center gap-2 bg-[#ffa633] text-white w-[150px] h-14 relative group overflow-hidden">
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
              {/* Image Upload Section */}
              <div className="mb-6">
                <div className="border border-[#ff950a] p-3">
                  <label className="block mb-2 text-sm font-medium">
                    Bike Images (Max 5)
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                    className="w-full"
                  />
                </div>

                {/* Image Previews */}
                {previewImages.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {previewImages.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Preview ${index}`}
                          className="w-full h-20 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Bike Fields */}
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
                    className="w-full text-white h-12 mt-4 text-xl relative group overflow-hidden flex items-center justify-center gap-2 bg-[#ffa633]"
                    disabled={selectedImages.length === 0}
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
