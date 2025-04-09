import CreateBikes from "./CreateBikes";
import ManageBikesTable from "./ManageBikesTable";
import { useGetAllBikesQuery } from "@/redux/api/BikeApi/bikeApi";
import { useState } from "react";
import Paginationpage from "@/components/Shared/Paginationpage";
import { useForm } from "react-hook-form";

const ManageBikes = () => {
  const [brand, setBrand] = useState<string | null>(null);
  const [isAvailable, setAvailability] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading } = useGetAllBikesQuery({
    page: currentPage,
    isAvailable: isAvailable ?? undefined,
    brand: brand ?? undefined,
  });

  const bikes = data?.data?.bikes;
  const totalPages = data?.data?.totalPages || 1;

  // Handles page change logic
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // react-hook-form setup
  const { register, watch } = useForm();

  // Watch changes to the select inputs and update state accordingly
  const selectedBrand = watch("brand");
  const selectedAvailability = watch("isAvailable");

  // Update brand filter
  const handleBrandChange = (value: string) => {
    setBrand(value === "All Brands" ? null : value);
  };

  // Update availability filter
  const handleAvailabilityChange = (value: string) => {
    setAvailability(value === "all" ? null : value);
  };

  const brands = [
    "Brands",
    "All Brands",
    "Yamaha",
    "Suzuki",
    "KTM",
    "Kawasaki",
    "Enfield",
    "Honda",
    "TVS",
  ];

  return (
    <div className="md:mx-10 my-10 mx-5">
      <div className="bg-white shadow-md w-full p-8 flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-between">
        <h1 className="sm:text-2xl text-xl font-bold">Inventory Of Bikes</h1>
        <div>
          <CreateBikes />
        </div>
      </div>

      <div>
        <div className="bg-white shadow-md w-full overflow-x-scroll relative">
          {/* Header Section */}
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between md:px-8 px-4 py-8 relative">
            <p className="sm:text-2xl text-xl font-bold">Bike List</p>
            <div>
              {/* Filter Form */}
              <div className="flex md:flex-row flex-col items-center gap-10 w-full">
                {/* Brand Filter */}
                <select
                  {...register("brand")}
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="border border-[#ff950a] cursor-pointer focus:outline-none focus:border-[#ffa633] sm:min-w-[180px] h-12 px-3 md:text-lg text-base "
                >
                  {brands?.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                {/* Availability Filter */}
                <select
                  {...register("isAvailable")}
                  value={selectedAvailability}
                  onChange={(e) => handleAvailabilityChange(e.target.value)}
                  className="border border-[#ff950a] cursor-pointer focus:outline-none focus:border-[#ffa633] sm:min-w-[180px] h-12 px-3 md:text-lg text-base "
                >
                  <option value="all">Availability</option>
                  <option value="all">All Bikes</option>
                  <option value="true">Available</option>
                  <option value="false">On Rent</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bikes Table Section */}
          <div className="md:px-8 px-4">
            <ManageBikesTable bikes={bikes} isLoading={isLoading} />
          </div>

          {/* Pagination */}
          <div className="pb-10">
            <Paginationpage
              handlePageChange={handlePageChange}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBikes;
