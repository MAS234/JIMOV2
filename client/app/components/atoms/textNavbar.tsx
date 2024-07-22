"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  route:string;
  setIsOpen: (isOpen: boolean) => void;
};

export default function TextNavbar({ title, route, setIsOpen }: Props) {

    const router = useRouter()


  return (
    <>
      <p className="text-xl text-black font-light hover:text-gray-600 border-b hover:border-b hover:border-black duration-150 cursor-pointer pompiere-regular " onClick={() => {
        router.push(route),
        setIsOpen(false)
      }}>
        {title}
      </p>
    </>
  );
}
