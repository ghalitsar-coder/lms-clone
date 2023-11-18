"use client";

import React from "react";
import { GuesRoutesProps } from "../constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  route: GuesRoutesProps;
};

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const {
    route: { label, icon: Icon, href },
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        `flex items-center gap-x-2 text-slate-500 text-sm font-[500]  pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20  `,
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-300/20 hover:text-sky-800"
      )}
    >
      <div className="flex items-center py-4 gap-x-2">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          `ml-auto opacity-0 border-2 border-sky-700 h-full transition-all`,
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};

export default SidebarItem;
