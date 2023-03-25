import { BsFillVolumeUpFill } from "react-icons/bs";

export default function VolumeBar({ value, min, max, onChange, setVolume }) {
  return (
    <div className="hidden flex-1 items-center justify-end lg:flex">
      <BsFillVolumeUpFill className="cursor-pointer text-xl text-yellow-400 dark:text-white" />
    </div>
  );
}
