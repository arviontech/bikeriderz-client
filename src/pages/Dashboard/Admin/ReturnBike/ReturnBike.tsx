import { useState } from "react";
import Paginationpage from "@/components/Shared/Paginationpage";
import { useForm } from "react-hook-form";
import { useGetAllBookingsQuery } from "@/redux/api/BookingApi/bookingApi";
import ReturnBikeTable from "./ReturnBikeTable";

const ReturnBike = () => {
  const [brand, setBrand] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading } = useGetAllBookingsQuery({
    page: currentPage,
    brand: brand ?? undefined,
  });

  const bookings = data?.data?.booking;
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

  // Update brand filter
  const handleBrandChange = (value: string) => {
    setBrand(value === "All Brands" ? null : value);
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
      <div>
        <div className="bg-white shadow-md w-full overflow-x-scroll relative">
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between md:px-8 px-4 py-8 relative">
            <p className="sm:text-2xl text-xl font-bold">Booked Bike List</p>
            <div>
              <div className=" w-full">
                {/* Brand Filter */}
                <select
                  {...register("brand")}
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="border border-[#ff950a] cursor-pointer focus:outline-none focus:border-[#ffa633] sm:min-w-[180px] h-12 px-3 md:text-lg text-base "
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Bikes Table Section */}
          <div className="md:px-8 px-4">
            <ReturnBikeTable bookings={bookings} isLoading={isLoading} />
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

export default ReturnBike;
