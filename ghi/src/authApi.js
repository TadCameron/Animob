import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authentication',
  tagTypes: ['Token'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST,
  }),
  endpoints: builder => ({
    login: builder.mutation({
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
      invalidatesTags: result => {
        return (result && ['Account']) || [];
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
  tagTypes: ['Account', 'Books', 'Token'],
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

    getToken: builder.query({
      query: () => ({
        url: '/token',

        credentials: 'include',
      }),
      providesTags: ['Token'],
    }),
  }),
})

export const { useSignUpMutation, useLogOutMutation, useLoginMutation, useGetTokenQuery } = authApi;
