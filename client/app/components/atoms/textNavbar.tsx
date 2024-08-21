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
      <p className="text-xl text-black font-light hover:text-white duration-150 hover:bg-black cursor-pointer pompiere-regular h-10 m-auto text-center" onClick={() => {
        router.push(route),
        setIsOpen(false)
      }}>
        {title}
      </p>
    </>
  );
}
