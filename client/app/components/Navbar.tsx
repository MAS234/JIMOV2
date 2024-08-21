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
      <nav className="flex items-center justify-between p-3 w-full sticky top-0 bg-white z-50">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="md:w-28 md:h-28 w-20 h-16"
          />
          <h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light md:mb-0 pompiere-regular text-black text-center md:hidden ml-4"
          >
            ISAROMAS
          </h1>
        </div>

        <div className={`flex flex-col items-center w-full md:w-auto`}>
          <h1
            className="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light md:mb-0 pompiere-regular text-black text-center"
          >
            ISAROMAS
          </h1>

          <div
            className={`text-center md:flex md:flex-row mt-5 w-full md:w-auto justify-center items-center gap-10 duration-300 bg-white rounded-lg ${
              isOpen
                ? "absolute top-[50px] left-0 right-0 md:relative md:top-0"
                : "absolute top-[-500px] md:relative md:top-0"
            }`}
          >
            <TextNavbar title="Inicio" route="/" setIsOpen={setIsOpen} />
            <TextNavbar title="Tienda" route="/tienda" setIsOpen={setIsOpen} />
            <TextNavbar title="Nosotros" route="/" setIsOpen={setIsOpen} />
          </div>
        </div>

        <div className="hidden md:flex items-center z-30">
          <button className="bg-black hover:bg-slate-600 duration-150 w-32 h-10 text-white rounded-lg shadow-md">
            Contacto
          </button>
        </div>

        <div className="md:hidden flex items-center z-30">
          <button onClick={toggleMenu}>
            <img
              src={isOpen ? "/close.svg" : "/open.svg"}
              alt="close/open"
              className="w-10 h-10 duration-300"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
