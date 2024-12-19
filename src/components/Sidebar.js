import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaBox,
  FaChartLine,
  FaChevronDown,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  // Fonction pour basculer l'état des sous-menus
  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <div className="w-64 bg-[#24303f] text-white h-screen">
      {/* Logo */}
      <div className="text-2xl font-bold p-6">La Cantina</div>

      {/* Divider */}
      <hr className="border-gray-600 my-4 w-4/5 mx-auto" />

      <ul className="space-y-2">
        {/* Section : Patron */}
        <li>
          <button
            onClick={() => toggleMenu("patron")}
            className="w-full flex items-center justify-between py-3 px-6 hover:bg-gray-700"
          >
            <div className="flex items-center">
              <FaUser className="mr-3" /> Patron
            </div>
            {openMenus.patron ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openMenus.patron && (
            <ul className="ml-6 space-y-1">
              <li>
                <NavLink
                  to="/users-management"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-gray-600 bg-opacity-20 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Gestion Utilisateurs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employees-management"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-gray-600 bg-opacity-20 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Gestion Employés
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products-management"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-gray-600 bg-opacity-20 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Gestion Produits
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logs"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-gray-600 bg-opacity-20 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Logs
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Divider */}
        <hr className="border-gray-600 my-4 w-4/5 mx-auto" />

        {/* Dashboard */}
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block py-3 px-6 rounded-lg ${
                isActive
                  ? "bg-gray-600 bg-opacity-20 text-white"
                  : "hover:bg-gray-700"
              } flex items-center`
            }
          >
            <FaHome className="mr-3" /> Dashboard
          </NavLink>
        </li>

        {/* Produits */}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `block py-3 px-6 rounded-lg ${
                isActive
                  ? "bg-gray-600 bg-opacity-20 text-white"
                  : "hover:bg-gray-700"
              } flex items-center`
            }
          >
            <FaBox className="mr-3" /> Produits
          </NavLink>
        </li>

        {/* Section : Vente */}
        <li>
          <button
            onClick={() => toggleMenu("vente")}
            className="w-full flex items-center justify-between py-3 px-6 hover:bg-gray-700"
          >
            <div className="flex items-center">
              <FaChartLine className="mr-3" /> Vente
            </div>
            {openMenus.vente ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openMenus.vente && (
            <ul className="ml-6 space-y-1">
              <li>
                <NavLink
                  to="/export-sales"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-gray-600 bg-opacity-20 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Vente Exportateur
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customer-sales"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-gray-600 bg-opacity-20 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Vente Client
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
