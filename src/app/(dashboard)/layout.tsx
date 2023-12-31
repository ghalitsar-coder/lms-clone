import React from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="h-full ">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 bg-red-300 min-h-screen">{children}</main>
    </div>
  );
};

export default DashboardLayout;
