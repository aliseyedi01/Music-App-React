import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
export default function VolumeBar({ value, onChange, setVolume }) {
  // console.log(value);
  return (
    <div className="hidden flex-1 items-center justify-end lg:flex">
      {(() => {
        switch (true) {
          case value === 0:
            return (
              <BsFillVolumeMuteFill
                className="cursor-pointer text-xl text-yellow-400 dark:text-white"
                onClick={() => setVolume(1)}
              />
            );
          case value > 0 && value <= 0.5:
            return (
              <BsVolumeDownFill
                className="cursor-pointer text-xl text-yellow-400 dark:text-white"
                onClick={() => setVolume(0)}
              />
            );
          case value > 0.5 && value <= 1:
            return (
              <BsFillVolumeUpFill
                className="cursor-pointer text-xl text-yellow-400 dark:text-white"
                onClick={() => setVolume(0)}
              />
            );
          default:
            return (
              <BsFillVolumeMuteFill
                className="cursor-pointer text-xl text-yellow-400 dark:text-white"
                onClick={() => setVolume(1)}
              />
            );
        }
      })()}
      <input
        type="range"
        className="h-1 w-24"
        step="any"
        value={value}
        min="0"
        max="1"
        onChange={onChange}
      />
    </div>
  );
}
