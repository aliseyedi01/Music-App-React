import React from "react";
import { SiMusicbrainz } from "react-icons/si";

export default function Home() {
  return (
    <div className="hide-scrollbar   flex h-full w-full flex-col overflow-y-hidden bg-light_bg_Main  font-serif dark:bg-dark_bg_Main">
      <div className="relative h-56">
        <img
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="  absolute bottom-0 w-full bg-cover bg-bottom bg-no-repeat blur-sm  "
        />
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
        {/* <p className="  p-2 ">
          In conclusion, music apps have revolutionized the music industry,
          allowing users to enjoy a personalized music experience while creating
          new ways of connecting and sharing music. With the wide variety of
          features offered by music apps, the possibilities for customization
          are endless. Music apps have transformed the way people listen to
          music, marking an exciting shift in the music industry that has
          allowed for greater accessibility and flexibility. Whether creating
          playlists or discovering new artists, music apps provide the perfect
          platform for music lovers to enjoy and share their passion for music.
        </p> */}
      </div>
    </div>
  );
}
