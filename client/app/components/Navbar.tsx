"use client";

import React, { useState } from "react";
import TextNavbar from "./atoms/textNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-3 w-full">
        <div>
          <img src="/logo.png" alt="logo" className=" md:w-28 md:h-28 w-20 h-16 " />
        </div>

        <div className={`flex flex-col items-center w-full md:w-auto `}>
          <h1 className={`text-4xl font-light md:mb-0 pompiere-regular text-black text-center `}>ISAROMAS</h1>
          <div className={`text-center md:flex md:flex-row mt-5  w-52 h-24 justify-center items-center gap-10  duration-300 ${isOpen ? "absolute top-[50px]" : " md:top-auto absolute top-[-500px] duration-300"}`}>
            <TextNavbar title="Inicio" route="/" setIsOpen={setIsOpen}/>
            <TextNavbar title="Tienda" route="/tienda" setIsOpen={setIsOpen}/>
            <TextNavbar title="Contacto" route="/" setIsOpen={setIsOpen}/>
          </div>
        </div>

        <div className="flex items-center z-30">
          <img src="/logo.png" alt="logo" className="w-28 h-28 hidden md:block" />
          <button className="md:hidden ml-4" onClick={toggleMenu}>
            <img src={isOpen ? "/close.svg" : "/open.svg"} alt="close/open" className="w-10 h-10 duration-300" />
          </button>
        </div>
      </nav>
    </>
  );
}
