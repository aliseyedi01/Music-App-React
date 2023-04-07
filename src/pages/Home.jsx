import React from "react";
import { SiMusicbrainz } from "react-icons/si";
import { Navigation } from "../components";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function Home() {
  return (
    <div className=" relative  flex h-full w-full flex-col    bg-light_bg_Main font-serif  dark:bg-dark_bg_Main md:gap-0">
      <div className=" absolute top-3 right-3 z-10 h-max w-max self-end  ">
        <Navigation />
      </div>
      <div className=" my-1 h-max w-full md:h-56">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="home"
            className=" absolute top-0 h-36 w-full  bg-cover bg-bottom bg-no-repeat blur-sm md:h-56  "
          />
          <h2 className="absolute left-5 top-12  bg-transparent font-Lemon text-3xl text-indigo-400 dark:text-orange-500 md:top-12  md:left-9 md:text-4xl ">
            Music app
          </h2>
          <SiMusicbrainz className="absolute top-28 left-5 bg-cover  text-5xl text-indigo-600 dark:text-orange-500 md:-bottom-11 md:text-8xl " />
        </div>
      </div>
      <Scrollbars
        autoHide
        autoHideTimeout={3000}
        autoHideDuration={500}
        thumbMinSize={10}
        thumbSize={300}
        renderThumbVertical={({ style, ...props }) => (
          <div
            className="  rounded-md bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-400 dark:hover:bg-gray-500"
            style={{ ...style }}
            {...props}
          />
        )}
      >
        <div className="  flex h-max w-full flex-col items-center justify-center gap-3   p-3 text-justify  font-Ubuntu text-light_txt_Main dark:text-dark_txt_Main md:mt-10 ">
          <p className="mt-60 p-2 md:mt-0">
            Music apps are software applications designed to help users access and listen to music
            tracks using their mobile devices or computers. These apps offer convenience,
            flexibility, and a wide range of features that allow users to create playlists, listen
            to live radio, stream music videos, and personalize their listening experience based on
            their preferences. The popularity of music apps has vastly expanded in recent years,
            enabling users to enjoy a rich audio experience anytime and anywhere
          </p>

          <p className=" p-2 ">
            With music apps, users can explore different genres of music and discover new artists,
            making it easier to find and access new music from across the world. Moreover, music
            apps also allow users to customize their experience based on their mood or interests,
            providing a personalized listening experience. Many music apps have also integrated
            social media features, where users can share their playlists, create collaborative
            playlists, and connect with new friends who share similar music interests. Ultimately,
            music apps provide a unique and engaging platform for music lovers to enjoy their music
            and connect with others who share the same passion for music.
          </p>
        </div>
      </Scrollbars>
    </div>
  );
}
