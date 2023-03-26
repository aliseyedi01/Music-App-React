import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = process.env.REACT_APP_API_KEY_TWO;
console.log(apiKey);

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongTrack: builder.query({
      query: () => "charts/track",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      // query: ({ songid }) => `songs/list-recommendations?key=${songid}`,
      query: () => "songs/list-recommendations?key=484129036&locale=en-US",
    }),
  }),
});

export const {
  useGetSongTrackQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamApi;
