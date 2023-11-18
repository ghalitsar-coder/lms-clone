"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  return (
    <div className="grid place-content-center h-screen gap-3.5">
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            transition={{
              //   duration: 1,
              ease: "backInOut",
              //    ease
            }}
            className="w-40 h-40 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
        layout
      >
        Show / Hide
      </Button>
    </div>
  );
};

export default BasicsOfMotion;
