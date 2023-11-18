"use client";
import React from "react";
import SidebarItem from "./SidebarItem";
import { GuesRoutesProps, guestRoutes } from "./constants";

const SidebarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full space-y-2.5">
      {routes.map((route: GuesRoutesProps, idx) => (
        <SidebarItem route={route} key={idx} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
