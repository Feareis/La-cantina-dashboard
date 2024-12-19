import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PageHeader from "./PageHeader";

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#1a222c]">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteneur principal */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-4 flex-1">
          {/* PageHeader */}
          <div className="w-[75%] mx-auto">
            <PageHeader
              title="Dashboard"
              breadcrumb={[
                { name: "Home", link: "/" },
                { name: "Dashboard" },
              ]}
            />
          </div>

          {/* Contenu principal centré horizontalement */}
          <div className="w-[75%] mx-auto mt-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
