import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongTrack: builder.query({
      query: () => "charts/track",
    }),
    getSongList: builder.query({
      query: () => "charts/list",
    }),
    getSongsByGenre: builder.query({
      query: (listid) => `charts/track?listId=${listid}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: () => "songs/list-recommendations?key=484129036&locale=en-US",
    }),
    getArtistDetails: builder.query({
      query: ({ artistsId }) => `artists/get-details?id=${artistsId}`,
    }),
    getArtistTopSongs: builder.query({
      query: ({ artistsId }) => `/artists/get-top-songs?id=${artistsId}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&limit=20`,
    }),
  }),
});

export const {
  useGetSongTrackQuery,
  useGetSongListQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetSongsBySearchQuery,
} = shazamApi;
