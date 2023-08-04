import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

export default function VolumeBar({ value, onChange, setVolume }) {
  return (
    <div className=" flex w-full flex-1 items-center justify-between   md:justify-end lg:flex">
      {(() => {
        switch (true) {
          case value === 0:
            return (
              <BsFillVolumeMuteFill
                className="inline-block cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
                onClick={() => setVolume(1)}
              />
            );
          case value > 0 && value <= 0.5:
            return (
              <BsVolumeDownFill
                className="inline-block cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
                onClick={() => setVolume(0)}
              />
            );
          case value > 0.5 && value <= 1:
            return (
              <BsFillVolumeUpFill
                className="inline-block  cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
                onClick={() => setVolume(0)}
              />
            );
          default:
            return (
              <BsFillVolumeMuteFill
                className="cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
                onClick={() => setVolume(1)}
              />
            );
        }
      })()}
      <input
        type="range"
        className="h-1 w-16 md:w-24"
        step="any"
        value={value}
        min="0"
        max="1"
        onChange={onChange}
      />
    </div>
  );
}
