import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: ({ role }: { role?: string } = {}) => {
        const params = new URLSearchParams();

        // Append role to params only if role is not "all" or empty
        if (role && role !== "all") {
          params.append("role", role);
        }
        console.log(params.toString());
        return {
          url: `/api/users/me`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),

    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: `/api/users/me/${id}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        const { id, ...payload } = data; //object destructuring to extract the id property from the data object and to collect the remaining properties into a new object called payload.

        return {
          url: `/api/users/me${id ? `/${id}` : ""}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = userApi;
