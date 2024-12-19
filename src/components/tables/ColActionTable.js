import React, { useState, useRef, useEffect } from "react";

const ColActionTable = ({ onEdit, onDelete, onDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer la modal si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        Action
        <span className="ml-2">&#9662;</span>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-[#1a222c] rounded-lg shadow-lg text-gray-300 z-10">
          <button
            onClick={() => {
              setIsOpen(false);
              onEdit && onEdit();
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600 rounded-t-lg"
          >
            Edit
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              onDelete && onDelete();
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600"
          >
            Delete
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              onDetails && onDetails();
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-600 rounded-b-lg"
          >
            Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ColActionTable;
