import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import UsersManagement from "./pages/UsersManagement";
import EmployeesManagement from "./pages/EmployeesManagement";
import ProductsManagement from "./pages/ProductsManagement";
import Logs from "./pages/Logs";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ExportSales from "./pages/ExportSales";
import CustomerSales from "./pages/CustomerSales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Main Page */}
          <Route index element={<Dashboard />} />

          {/* Patron */}
          <Route path="users-management" element={<UsersManagement />} />
          <Route path="employees-management" element={<EmployeesManagement />} />
          <Route path="products-management" element={<ProductsManagement />} />
          <Route path="logs" element={<Logs />} />

          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Products */}
          <Route path="products" element={<Products />} />

          {/* Sales */}
          <Route path="export-sales" element={<ExportSales />} />
          <Route path="customer-sales" element={<CustomerSales />} />

          {/* Default Redirection */}
          <Route path="*" element={<Navigate to="/" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
