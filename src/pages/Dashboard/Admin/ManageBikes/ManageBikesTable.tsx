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
import { TBike } from "@/types/Types";
import UpdateBike from "./UpdateBike";
import { Trash2 } from "lucide-react";
import { useDeleteBikeMutation } from "@/redux/api/BikeApi/bikeApi";
import { toast } from "sonner";
import { useState } from "react";
import DeleteConfirmModel from "./DeleteConfirmModel";

const ManageBikesTable = ({
  bikes,
  isLoading,
}: {
  bikes: TBike[];
  isLoading: boolean;
}) => {
  const [deleteBike, { isLoading: isDeleteLoading }] = useDeleteBikeMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bikeToDelete, setBikeToDelete] = useState<string | null>(null);

  const handleDeleteConfirmation = async () => {
    if (bikeToDelete) {
      console.log("biketoDelte:", bikeToDelete);
      try {
        const result = await deleteBike(bikeToDelete);
        console.log(result);
        if (result) {
          toast.success("Bike is deleted successfully");
        }
      } catch (err) {
        toast.error("Failed to delete Bike");
        console.log(err);
      } finally {
        setIsDialogOpen(false);
        setBikeToDelete(null); // Reset bikeToDelete after deletion
      }
    }
  };
  return (
    <div className="xl:w-full w-[900px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-base">Image</TableHead>
            <TableHead className="font-semibold text-base">Name</TableHead>
            <TableHead className="font-semibold text-base">Brand</TableHead>
            <TableHead className="font-semibold text-base">Model</TableHead>
            <TableHead className="font-semibold text-base">
              PricePerHour
            </TableHead>
            <TableHead className="font-semibold text-base">CC</TableHead>
            <TableHead className="font-semibold text-base">Power</TableHead>
            <TableHead className="font-semibold text-base">
              Availability
            </TableHead>
            <TableHead className="font-semibold text-base">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center pt-20">
                <div className="  flex items-center justify-center w-full h-14 ">
                  <Lottie animationData={spinner} loop={true} />
                </div>
              </TableCell>
            </TableRow>
          ) : (
            bikes?.map((bike: TBike) => (
              <TableRow key={bike?._id}>
                <TableCell>
                  <img
                    src={bike?.images[0]}
                    className="w-12 h-12 rounded-xl"
                    alt=""
                  />
                </TableCell>
                <TableCell>{bike?.name}</TableCell>
                <TableCell>{bike?.brand}</TableCell>
                <TableCell>{bike?.model}</TableCell>
                <TableCell className="text-center">
                  {bike?.pricePerHour}
                </TableCell>
                <TableCell>{bike?.cc}Cc</TableCell>
                <TableCell className="text-center">{bike?.power}BHP</TableCell>
                <TableCell>
                  <span
                    className={
                      bike?.isAvailable ? "text-green-600" : "text-red-600"
                    }
                  >
                    {bike?.isAvailable ? "Available" : "On Rent"}
                  </span>
                </TableCell>

                <TableCell className="flex items-center gap-2">
                  <UpdateBike bike={bike} />
                  <button
                    className={` flex  items-center justify-center rounded-md  bg-[#ff3434] text-white  p-3 relative group overflow-hidden`}
                    onClick={() => {
                      setIsDialogOpen(true);
                      setBikeToDelete(bike?._id);
                    }}
                  >
                    <Trash2 className="text-white w-5 h-5 z-10" />
                    <span className="absolute inset-0 bg-[#ff1717] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <DeleteConfirmModel
        isOpen={isDialogOpen}
        onConfirm={handleDeleteConfirmation}
        onCancel={() => setIsDialogOpen(false)}
        bikeName={
          bikeToDelete
            ? bikes?.find((bike) => bike?._id === bikeToDelete)?.name || ""
            : ""
        }
        isDeleteLoading={isDeleteLoading}
      />
    </div>
  );
};

export default ManageBikesTable;
