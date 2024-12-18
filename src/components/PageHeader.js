import React from "react";

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="flex justify-between items-center bg-[#1a222c] text-white px-6 py-4 w-full">
      {/* Titre principal (à gauche) */}
      <h1 className="text-2xl font-bold">{title}</h1>

      {/* Breadcrumb (à droite) */}
      <nav className="text-gray-400">
        <ol className="list-none flex space-x-1">
          {breadcrumb.map((item, index) => (
            <li key={index} className="flex items-center">
              <span
                className={`${
                  index === breadcrumb.length - 1
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
              {index < breadcrumb.length - 1 && (
                <span className="mx-1">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default PageHeader;
