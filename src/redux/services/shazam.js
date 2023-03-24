import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = process.env.REACT_APP_API_KEY;

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "68e42016c1msh5080d0e469e0b0cp1d7c07jsn539b970c36c9");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongTrack: builder.query({
      query: () => "charts/track",
    }),
  }),
});

export const { useGetSongTrackQuery } = shazamApi;
