import React from "react";
import ActionMenu from "./ColActionTable";

const TableManagement = ({ columns, data }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="w-full border-collapse">
        {/* En-tête */}
        <thead>
          <tr className="bg-blue-600 text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`px-4 py-3 text-sm font-semibold ${
                  col.align === "center"
                    ? "text-center"
                    : col.align === "right"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Corps */}
        <tbody className="bg-[#24303f] text-gray-300">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-700 transition">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-3 border-b border-gray-700 align-middle ${
                    col.align === "center"
                      ? "text-center"
                      : col.align === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {col.accessor === "action" ? (
                    <div className="flex justify-center">
                      <ActionMenu
                        onEdit={() => alert(`Edit ${row.name}`)}
                        onDelete={() => alert(`Delete ${row.name}`)}
                        onDetails={() => alert(`Details of ${row.name}`)}
                      />
                    </div>
                  ) : (
                    row[col.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableManagement;
