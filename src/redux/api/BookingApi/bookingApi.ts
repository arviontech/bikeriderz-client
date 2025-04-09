import { baseApi } from "../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBookings: builder.mutation({
      query: (data) => {
        return {
          url: "/api/rentals",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Rental"],
    }),

    getMyAllBookings: builder.query({
      query: () => {
        return {
          url: "/api/rentals/my-rentals",
          method: "GET",
        };
      },
      providesTags: ["Rental"],
    }),
    getAllBookings: builder.query({
      query: () => {
        return {
          url: "/api/rentals",
          method: "GET",
        };
      },
      providesTags: ["Rental"],
    }),

    updateIsPaid: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/api/rentals/${id}/pay`,
          method: "PUT",
        };
      },
      invalidatesTags: ["Rental"],
    }),

    returnBike: builder.mutation({
      query: (id) => {
        return {
          url: `/api/rentals/${id}/return`,
          method: "PUT",
        };
      },
      invalidatesTags: ["Rental"],
    }),
  }),
});

export const {
  useCreateBookingsMutation,
  useGetMyAllBookingsQuery,
  useGetAllBookingsQuery,
  useUpdateIsPaidMutation,
  useReturnBikeMutation,
} = bookingApi;
