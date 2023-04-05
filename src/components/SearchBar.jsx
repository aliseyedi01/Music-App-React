import React from "react";
import { FiSearch } from "react-icons/fi";
export default function SearchBar({
  SearchInputHandle,
  searchHandle,
  handleEnterKey,
  setSearchTerm,
  searchTerm,
}) {
  return (
    <div className="w-fll relative mt-3  flex  flex-row items-center justify-start  ">
      <input
        type="search"
        name=""
        id=""
        autoComplete="off"
        placeholder="Search Music . . . "
        className=" h-8 w-56 rounded bg-slate-500 px-1 pl-7 font-Montserrat text-white placeholder-orange-200 outline-none duration-1000 placeholder:text-sm placeholder:font-semibold focus:ring-2 focus:ring-yellow-200  dark:bg-orange-500 dark:text-black  dark:placeholder-orange-900 md:w-96"
        onKeyUp={handleEnterKey}
        onChange={SearchInputHandle}
        value={searchTerm}
        spellCheck={false}
      />
      <FiSearch
        className="absolute inset-0 my-auto ml-1  h-5 w-5   cursor-pointer text-base text-gray-200 dark:text-red-800"
        onClick={() => searchHandle()}
      />
    </div>
  );
}
