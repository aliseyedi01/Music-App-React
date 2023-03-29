import React from "react";
import { SiMusicbrainz } from "react-icons/si";
import { Navigation } from "../components";

export default function Home() {
  return (
    <div className="hide-scrollbar relative  flex h-full w-full flex-col overflow-y-hidden bg-light_bg_Main  font-serif dark:bg-dark_bg_Main">
      <div className=" absolute top-3 right-3 z-10 h-max w-max self-end  ">
        <Navigation />
      </div>
      <div className="relative h-56 w-full">
        <img
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" absolute bottom-0  w-full bg-cover bg-bottom bg-no-repeat blur-sm  "
        />
        <h2 className="absolute  left-9 top-12 bg-transparent font-Lemon text-4xl  text-indigo-400 dark:text-orange-500 ">
          Music app
        </h2>
        <SiMusicbrainz className="absolute -bottom-11 left-5  bg-cover text-8xl text-indigo-600 dark:text-orange-500 " />
      </div>
      <div className=" gap-1justify-center mt-10 flex h-max w-full flex-col items-center gap-3 p-3  text-justify font-Ubuntu text-light_txt_Main dark:text-dark_txt_Main ">
        <p className="p-2">
          Music apps are software applications designed to help users access and
          listen to music tracks using their mobile devices or computers. These
          apps offer convenience, flexibility, and a wide range of features that
          allow users to create playlists, listen to live radio, stream music
          videos, and personalize their listening experience based on their
          preferences. The popularity of music apps has vastly expanded in
          recent years, enabling users to enjoy a rich audio experience anytime
          and anywhere
        </p>

        <p className=" p-2 ">
          With music apps, users can explore different genres of music and
          discover new artists, making it easier to find and access new music
          from across the world. Moreover, music apps also allow users to
          customize their experience based on their mood or interests, providing
          a personalized listening experience. Many music apps have also
          integrated social media features, where users can share their
          playlists, create collaborative playlists, and connect with new
          friends who share similar music interests. Ultimately, music apps
          provide a unique and engaging platform for music lovers to enjoy their
          music and connect with others who share the same passion for music.
        </p>
      </div>
    </div>
  );
}
