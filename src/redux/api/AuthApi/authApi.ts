import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUP: builder.mutation({
      query: (userInfo) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),

    logIN: builder.mutation({
      query: (userInfo) => ({
        url: "/api/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useSignUPMutation, useLogINMutation } = authApi;
