import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaAddressBook, FaCog, FaSignOutAlt } from "react-icons/fa";
import profileImage from "../assets/pp/patron-employes.png";

const ProfileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Fonction pour basculer le menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Fermer le menu lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Bouton Profil */}
      <button
        onClick={toggleMenu}
        className="flex flex-row-reverse items-center space-x-3 space-x-reverse p-2 rounded-lg hover:bg-[#1a222c] transition duration-300"
      >
        {/* Image de Profil */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        {/* Détails Utilisateur */}
        <div className="text-right">
          <div className="font-bold text-white">Oscar Kirk</div>
          <div className="text-gray-400 text-sm">Patron</div>
        </div>
      </button>

      {/* Menu Déroulant */}
      {showMenu && (
        <div
          className="absolute right-0 mt-2 w-64 bg-[#24303f] text-white rounded-[2px] border border-gray-500 shadow-lg"
        >
          <ul className="p-2">
            <li className="flex items-center px-4 py-3 hover:bg-[#1a222c] rounded cursor-pointer">
              <FaUser className="mr-3" /> My Profile
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-[#1a222c] rounded cursor-pointer">
              <FaAddressBook className="mr-3" /> My Contacts
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-[#1a222c] rounded cursor-pointer">
              <FaCog className="mr-3" /> Account Settings
            </li>
          </ul>
          <div className="border-t border-gray-700"></div>
          <ul className="p-2">
            <li className="flex items-center px-4 py-3 text-red-400 hover:bg-[#1a222c] rounded cursor-pointer">
              <FaSignOutAlt className="mr-3" /> Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
