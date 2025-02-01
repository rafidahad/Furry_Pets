import React from "react";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import Image from "./Image";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* HeaderLeft */}
      <div className="flex items-center">
        <Image src="src/assets/petlogo.png" alt="Logo" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent placeholder-gray-500 outline-none flex-shrink"
            type="text"
            placeholder="Search Furry Pets"
          />
        </div>
      </div>

      {/* HeaderMiddle */}
        
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
            </div>
        </div>

      {/* HeaderRight */}
      
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <p className="whitespace-nowrap font-semibold pr-3">
          User Name
        </p>
        
      </div>
    </div>
  );
}

export default Header;
