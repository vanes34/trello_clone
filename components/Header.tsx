"use client";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col items-center p-5 md:flex-row bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1]  rounded-md filter blur-3xl opacity-50 -z-50" />
        <Image
          src="https://links.papareact.com/c2cdd5"
          width={300}
          height={100}
          alt="Trello-logo"
          className="object-contain pb-10 w-44 md:w-56 md:pb-0"
        />
        <div className="flex items-center justify-end flex-1 w-full space-x-5">
          {/* SearchBox */}
          <form
            action=""
            className="flex items-center flex-1 p-2 space-x-5 bg-white rounded-md shadow-md md:flex-initial"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              className="flex-1 p-2 outline-none"
              placeholder="Search"
            />
            <button hidden>Search</button>
          </form>

          {/* Avatar */}
          <Avatar
            name="Vanesa Binaj"
            round
            color="#0055D1"
            size="50"
            className=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm  font-light rounded-xl pr-5 shadow-xl w-fit bg-white italic max-w-3xl text-[#0055D1] p-5">
          <UserCircleIcon className="inline-block w-10 h-10 text-[#0055D1] mr-1" />
          GPT is summarizing your tasks for the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
