"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="flex items-center  w-full space-x-2.5">
      <Image
        onClick={handleClick}
        src={"/logo.svg"}
        alt="logo"
        height={35}
        width={35}
        className="cursor-pointer"
      />
      <button onClick={handleClick}>
        <h3 className="text-lg font-semibold  text-[#17CF97]">E-learning</h3>
      </button>
    </div>
  );
};

export default Logo;
