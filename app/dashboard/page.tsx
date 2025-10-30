import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
    </div>
  );
};

export default DashboardPage;
