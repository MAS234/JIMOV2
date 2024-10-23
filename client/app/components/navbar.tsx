"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Barra de navegación */}
      <div
        className="sticky top-0 z-50 h-14 flex justify-between items-center px-4 sm:px-8 lg:px-16 shadow-md font-podkova"
        style={{ background: "linear-gradient(to right, #D35C8D, #EE9EBF)" }}
      >
        {/* Logo */}
        <div>
          <h1 className="text-white text-lg font-bold">LOGO</h1>
        </div>

        {/* Opciones de navegación (pantallas grandes) */}
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10 text-white text-lg">
          <Link href="/" className="hover:text-[#d45d8f] cursor-pointer">
            Inicio
          </Link>
          <p className="hover:text-[#d45d8f] cursor-pointer">Nosotros</p>
          <p className="hover:text-[#d45d8f] cursor-pointer">Contacto</p>
        </div>

        {/* Botón Tienda */}
        <div className="hidden md:flex">
          <div className="border duration-150 hover:bg-[#d45d8f] border-white rounded-md">
            <Link href="/tienda" className="text-white text-lg p-2 cursor-pointer transition">
              Tienda
            </Link>
          </div>
        </div>

        {/* Menú hamburguesa móvil (pantallas pequeñas) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú lateral emergente (pantallas pequeñas) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#D35C8D] text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300 z-40`}
      >
        {/* Botón para cerrar el menú */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-white">
          <h2 className="text-lg font-bold">Menú</h2>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Opciones del menú móvil */}
        <ul className="flex flex-col gap-4 p-4">
          <li className="hover:text-[#EE9EBF] cursor-pointer">
            <Link href="/">Inicio</Link>
          </li>
          <li className="hover:text-[#EE9EBF] cursor-pointer">
            Nosotros
          </li>
          <li className="hover:text-[#EE9EBF] cursor-pointer">
            Contacto
          </li>
          <li className="hover:text-[#EE9EBF] cursor-pointer border-t border-white pt-4">
            <Link href="/tienda">Tienda</Link>
          </li>
        </ul>
      </div>

      {/* Fondo oscuro al abrir el menú lateral en móvil */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-30"
        ></div>
      )}
    </>
  );
}

export default Navbar;
