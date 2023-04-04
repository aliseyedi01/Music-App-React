import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components";
import { useGetSongTrackQuery } from "../redux/services/shazam";
import useLazyLoadImage from "../hooks/useLazyLoadImage";

export default function TopArtists() {
  const { data } = useGetSongTrackQuery();
  const [registerRef, isVisible] = useLazyLoadImage(data?.tracks?.length || 0);
  // const [ref, isVisible] = useLazyLoadImage();

  const [imageLoadingStates, setImageLoadingStates] = useState(
    data?.tracks ? Object.fromEntries(data.tracks.map((artist, i) => [i, true])) : {}
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

  // console.log("Loading", imageLoadingStates);
  console.log("visible", isVisible);
  // console.log("ref", ref);
  // console.log("length", data?.tracks?.length);
  // console.log("length", Array(data?.tracks?.length).fill(false));

  return (
    <div className="  flex h-full w-full flex-col   bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <div className="flex items-center justify-between px-4">
        <h2 className="font-Montserrat text-2xl text-light_txt_Main dark:text-dark_txt_Main ">
          Top Artist
        </h2>
        <Navigation />
      </div>
      <div className="hide-scrollbar grid h-full w-full grid-cols-3 justify-center justify-items-center overflow-y-scroll ">
        {data?.tracks?.map((artist, i) => (
          <Link key={i} to={`/artists/${artist?.artists[0].adamid}`}>
            <div
              ref={registerRef}
              className="my-2 flex h-full w-36 flex-col items-center justify-center"
            >
              {imageLoadingStates[i] && (
                <div className="h-32 w-32 animate-pulse rounded-full bg-blue-700 dark:bg-slate-600" />
              )}
              <div
                className={
                  imageLoadingStates[i] ? "hidden" : "h-32 w-32 overflow-hidden rounded-full"
                }
              >
                <img
                  src={!isVisible[i] ? "" : artist.images.background}
                  alt="artists"
                  className={
                    imageLoadingStates[i]
                      ? "hidden"
                      : "h-32 w-32 transform overflow-hidden rounded-full shadow-md transition-transform duration-700 hover:scale-125"
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
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Navigation } from "../components";
// import { useGetSongTrackQuery } from "../redux/services/shazam";

// export default function TopArtists() {
//   const { data } = useGetSongTrackQuery();

//   const [imageLoadingStates, setImageLoadingStates] = useState(
//     data?.tracks ? Object.fromEntries(data.tracks.map((artist, i) => [i, true])) : {}
//   );

//   useEffect(() => {
//     if (data?.tracks) {
//       setImageLoadingStates((prevState) => {
//         const newStates = Object.fromEntries(data.tracks.map((artist, i) => [i, true]));
//         return { ...prevState, ...newStates };
//       });
//     }
//   }, [data]);

//   const handleImageLoad = (index) => {
//     setImageLoadingStates((prevStates) => ({
//       ...prevStates,
//       [index]: false,
//     }));
//   };

//   console.log("Loading", imageLoadingStates);

//   return (
//     <div className="  flex h-full w-full flex-col   bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
//       <div className="flex items-center justify-between px-4">
//         <h2 className="font-Montserrat text-2xl text-light_txt_Main dark:text-dark_txt_Main ">
//           Top Artist
//         </h2>
//         <Navigation />
//       </div>
//       <div className="hide-scrollbar grid h-full w-full grid-cols-3 justify-center justify-items-center overflow-y-scroll ">
//         {data?.tracks?.map((artist, i) => (
//           <Link key={i} to={`/artists/${artist?.artists[0].adamid}`}>
//             <div className="  h- flex w-36 flex-col items-center  justify-center">
//               {imageLoadingStates[i] && (
//                 <div className=" h-32 w-32 animate-pulse rounded-full bg-blue-700 dark:bg-slate-600"></div>
//               )}
//               <div
//                 className={
//                   imageLoadingStates[i] ? "hidden" : "h-32 w-32 overflow-hidden  rounded-full  "
//                 }
//               >
//                 <img
//                   src={artist.images.background}
//                   alt="artists"
//                   loading="eager"
//                   className={
//                     imageLoadingStates[i]
//                       ? "hidden"
//                       : "h-32 w-32 transform overflow-hidden rounded-full shadow-md transition-transform duration-700 hover:scale-125"
//                   }
//                   onLoad={() => handleImageLoad(i)}
//                   onError={() =>
//                     setImageLoadingStates((prevStates) => ({ ...prevStates, [i]: true }))
//                   }
//                 />
//               </div>

//               <p className=" mt-1 w-32  truncate text-center font-Montserrat text-sm font-semibold text-light_txt_Main dark:text-dark_txt_Main">
//                 {artist.subtitle}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
