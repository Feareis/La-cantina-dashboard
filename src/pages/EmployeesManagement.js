import React from "react";
import TableManagement from "../components/tables/TableManagement";

const EmployeesTableManagement = () => {
  // Définition des colonnes
  const columns = [
    { header: "Grade", accessor: "grade", align: "left" },
    { header: "Name", accessor: "name", align: "left" },
    { header: "Phone Number", accessor: "pn", align: "center" },
    { header: "Hiring Date", accessor: "hd", align: "center" },
    { header: "Edit", accessor: "action", align: "right" },
  ];

  // Données de la table
  const data = [
    {
      grade: "Patron",
      name: "Oscar Kirk",
      pn: "(123) 456-0000",
      hd: "01/01/2000",
    },
    {
      grade: "Responsable",
      name: "Endzo Leon",
      pn: "(123) 456-0001",
      hd: "01/02/2000",
    },
    {
      grade: "Responsable",
      name: "Test 1 Test 1",
      pn: "(123) 456-7891",
      hd: "01/01/2001",
    },
    {
      grade: "Responsable",
      name: "Test 2 Test 2",
      pn: "(123) 456-7892",
      hd: "01/01/2002",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Table Management</h1>
      <TableManagement columns={columns} data={data} />
    </div>
  );
};

export default EmployeesTableManagement;
