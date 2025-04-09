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
import {
  useGetSingleBikesQuery,
  useUpdateBikeMutation,
} from "@/redux/api/BikeApi/bikeApi";
import { FilePenLine, X } from "lucide-react";
import { useEffect, useState } from "react";

const UpdateBike = ({ bike }: { bike: TBike }) => {
  const [updateBike, { isLoading: updateLoading }] = useUpdateBikeMutation();
  const { data: fetchedBike, isLoading: bikeLoading } = useGetSingleBikesQuery(
    bike._id!
  );

  const { register, handleSubmit, reset, setValue } = useForm<TBike>();

  // State for dialog
  const [isOpen, setIsOpen] = useState(false);

  // State for image handling
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>(
    bike.images || []
  );

  // Set form data when bike data is loaded
  useEffect(() => {
    if (fetchedBike?.data && !bikeLoading) {
      // Set form values from fetched bike data
      Object.keys(fetchedBike.data).forEach((key) => {
        setValue(key as keyof TBike, fetchedBike.data[key as keyof TBike]);
      });

      // Set existing images
      setExistingImages(fetchedBike.data.images || []);
    }
  }, [fetchedBike, bikeLoading, setValue]);

  // Reset form and image state when dialog opens
  useEffect(() => {
    if (isOpen) {
      // Clear any previous image selections
      setSelectedImages([]);
      setPreviewImages([]);

      // Reset form with current bike data
      if (fetchedBike?.data) {
        reset(fetchedBike.data);
        setExistingImages(fetchedBike.data.images || []);
      } else {
        reset(bike);
        setExistingImages(bike.images || []);
      }
    }
  }, [isOpen, bike, fetchedBike, reset]);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);

      // Limit to 5 images total (existing + new)
      const totalCount =
        existingImages.length + selectedImages.length + newFiles.length;
      if (totalCount > 5) {
        toast.error(
          `Can only have 5 images total. You can add ${
            5 - existingImages.length - selectedImages.length
          } more.`
        );
        return;
      }

      // Create preview URLs
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

      setSelectedImages([...selectedImages, ...newFiles]);
      setPreviewImages([...previewImages, ...newPreviewUrls]);
    }
  };

  // Remove new image
  const removeNewImage = (index: number) => {
    // Revoke object URL to prevent memory leaks
    URL.revokeObjectURL(previewImages[index]);

    const updatedImages = [...selectedImages];
    const updatedPreviews = [...previewImages];

    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedImages(updatedImages);
    setPreviewImages(updatedPreviews);
  };

  // Remove existing image
  const removeExistingImage = (index: number) => {
    const updatedExistingImages = [...existingImages];
    updatedExistingImages.splice(index, 1);
    setExistingImages(updatedExistingImages);
  };

  const onSubmit: SubmitHandler<TBike> = async (data) => {
    // Create FormData object
    const formData = new FormData();

    // Build payload with numeric field conversions
    const payload: Partial<TBike> = {
      ...data,
      ...(data.pricePerHour && { pricePerHour: Number(data.pricePerHour) }),
      ...(data.cc && { cc: Number(data.cc) }),
      ...(data.mileage && { mileage: Number(data.mileage) }),
      ...(data.topSpeed && { topSpeed: Number(data.topSpeed) }),
      ...(data.power && { power: Number(data.power) }),
      ...(data.year && { year: Number(data.year) }),
      ...(data.noOfCylinders && { noOfCylinders: Number(data.noOfCylinders) }),
      ...(data.fuelTankCapacity && {
        fuelTankCapacity: Number(data.fuelTankCapacity),
      }),
    };

    // The server expects data in the body under the "data" key
    formData.append("data", JSON.stringify(payload));

    // Add existing images information - likely needs to be part of the data object instead
    formData.append("existingImages", JSON.stringify(existingImages));

    // Append each new image file with the key "bikeImages"
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const result = await updateBike({
        id: bike._id,
        data: formData,
      }).unwrap();

      if (result) {
        toast.success("Bike updated successfully");

        // Clean up preview URLs
        previewImages.forEach((url) => URL.revokeObjectURL(url));
        setSelectedImages([]);
        setPreviewImages([]);

        // Close dialog
        setIsOpen(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update the bike");
    }
  };

  // if (bikeLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-40">
  //       <Loader className="animate-spin mr-2" />
  //       <p className="text-lg font-medium">Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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

          {bikeLoading ? (
            <div className="w-full flex items-center justify-center h-64">
              <Lottie animationData={spinner} loop={true} />
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Image Upload Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 pb-2">
                  Bike Images (Max 5)
                </label>
                <div className="border border-[#ff950a] p-3 mb-3">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                    className="w-full"
                  />
                </div>

                {/* Image Preview Section */}
                <div className="space-y-4">
                  {/* Existing Images */}
                  {existingImages.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Current Images</p>
                      <div className="grid grid-cols-3 gap-2">
                        {existingImages.map((image, index) => (
                          <div
                            key={`existing-${index}`}
                            className="relative group"
                          >
                            <img
                              src={image}
                              alt={`Bike ${index}`}
                              className="w-full h-20 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => removeExistingImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* New Images */}
                  {previewImages.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">New Images</p>
                      <div className="grid grid-cols-3 gap-2">
                        {previewImages.map((preview, index) => (
                          <div key={`new-${index}`} className="relative group">
                            <img
                              src={preview}
                              alt={`Preview ${index}`}
                              className="w-full h-20 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => removeNewImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bike Fields */}
              {bikeFields?.map(({ name, label, placeholder, type }) => {
                const currentBike = fetchedBike?.data || bike;
                const value = currentBike[name as keyof TBike];

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
                {updateLoading ? (
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateBike;
