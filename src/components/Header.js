import React from "react";
import { FaSearch } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <header className="bg-[#24303f] text-white p-4 flex items-center justify-between">
      {/* Barre de recherche */}
      <div className="relative w-1/3">
        {/* Icône de recherche seule */}
        <div className="hidden sm:block relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          {/* Input invisible */}
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full pl-10 pr-4 py-2 bg-transparent border-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Menu Profil */}
      <ProfileMenu />
    </header>
  );
};

export default Header;
