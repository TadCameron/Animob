import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST,
  }),
  tagTypes: ['Account', 'Token'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: data => ({
        url: '/api/accounts',
        method: 'post',
        body: data,
        credentials: 'include',
      }),
      providesTags: ['Account'],
      invalidatesTags: result => {
        return (result && ['Token']) || [];
      },

    }),
    logIn: builder.mutation({
      query: info => {
        let formData = null;
        if (info instanceof HTMLElement) {
          formData = new FormData(info);
        } else {
          formData = new FormData();
          formData.append('username', info.email);
          formData.append('password', info.password);
        }
        return {
          url: '/token',
          method: 'post',
          body: formData,
          credentials: 'include',
        };
      },
      providesTags: ['Account'],
      invalidatesTags: result => {
        return (result && ['Token']) || [];
      },
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/token',
        method: 'delete',
        credentials: 'include',
      }),
      invalidatesTags: ['Account', 'Token'],
    }),
    getToken: builder.query({
      query: () => ({
        url: '/token',
        credentials: 'include',
      }),
      providesTags: ['Token'],
    }),
  }),
});

export const {
  useGetTokenQuery,
  useLogInMutation,
  useLogOutMutation,
  useSignUpMutation,
} = authApiSlice;
