// react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
// components
import { Navigation } from "../components";
// custom hook
import useLazyLoadImage from "../hooks/useLazyLoadImage";
// redux
import { useGetSongTrackQuery } from "../redux/services/shazam";

export default function TopArtists() {
  const { data } = useGetSongTrackQuery();
  const [registerRef, isVisible] = useLazyLoadImage(data?.tracks?.length || 0);

  const [imageLoadingStates, setImageLoadingStates] = useState(
    data?.tracks ? Object.fromEntries(data.tracks.map((artist, i) => [i, true])) : {},
  );

  useEffect(() => {
    if (data?.tracks) {
      setImageLoadingStates((prevState) => {
        const newStates = Object.fromEntries(data.tracks.map((artist, i) => [i, true]));
        return { ...prevState, ...newStates };
      });
    }
  }, [data]);

  const handleImageLoad = (index) => {
    setImageLoadingStates((prevStates) => ({
      ...prevStates,
      [index]: false,
    }));
  };

  return (
    <div className="flex h-full w-full flex-col bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <div className="flex items-center justify-between px-4">
        <h2 className="font-Montserrat text-2xl text-light_txt_Main dark:text-dark_txt_Main">
          Top Artist
        </h2>
        <Navigation />
      </div>
      <Scrollbars
        autoHide
        autoHideTimeout={3000}
        autoHideDuration={500}
        thumbMinSize={10}
        thumbSize={150}
        renderThumbVertical={({ style, ...props }) => (
          <div
            className="rounded-md bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-400 dark:hover:bg-gray-500"
            style={{ ...style }}
            {...props}
          />
        )}
      >
        <div className="grid h-full w-full grid-cols-2 justify-center justify-items-center md:grid-cols-3">
          {data?.tracks?.map((artist, i) => (
            <Link key={i} to={`/artists/${artist?.artists?.[0].adamid}`}>
              <div
                ref={registerRef}
                className="my-2 flex h-full w-36 flex-col items-center justify-center"
              >
                {imageLoadingStates[i] && (
                  <div className="h-28 w-28 animate-pulse rounded-full bg-blue-700 dark:bg-slate-600 md:h-32 md:w-32" />
                )}
                <div
                  className={
                    imageLoadingStates[i]
                      ? "hidden"
                      : "h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32"
                  }
                >
                  <img
                    src={!isVisible[i] ? "" : artist.images?.background}
                    alt="artists"
                    className={
                      imageLoadingStates[i]
                        ? "hidden"
                        : "h-28 w-28 transform overflow-hidden rounded-full shadow-md transition-transform duration-700 hover:scale-125 md:h-32 md:w-32"
                    }
                    onLoad={() => handleImageLoad(i)}
                    onError={() =>
                      setImageLoadingStates((prevStates) => ({
                        ...prevStates,
                        [i]: { ...prevStates[i], hasError: true },
                      }))
                    }
                  />
                </div>
                <p className="mt-2 w-32 truncate text-center font-Montserrat text-sm font-semibold text-light_txt_Main dark:text-dark_txt_Main">
                  {artist.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Scrollbars>
    </div>
  );
}
