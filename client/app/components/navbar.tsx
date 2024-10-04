"use client"

import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  // Estado para controlar el menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#ed9dbe] sticky top-0 z-50 h-14 flex justify-between items-center px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <div>
          <h1 className="text-white text-lg font-bold">LOGO</h1>
        </div>

        {/* Opciones de navegación */}
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10 text-white text-sm">
          <p className="hover:text-gray-400 cursor-pointer">Nosotros</p>
          <Link href="/" className="hover:text-gray-400 cursor-pointer">Inicio</Link>
          <p className="hover:text-gray-400 cursor-pointer">Contacto</p>
        </div>

        {/* Botón Tienda */}
        <div>
          <div className="border duration-150 hover:bg-[#d45d8f] border-white rounded-md">
            <Link href="/tienda" className="text-white text-sm p-2 cursor-pointer  transition">Tienda</Link>
          </div>
        </div>

        {/* Menú hamburguesa móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil oculto/visible según el estado */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-900 text-white md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-gray-400 cursor-pointer">Nosotros</li>
            <li className="hover:text-gray-400 cursor-pointer">Inicio</li>
            <li className="hover:text-gray-400 cursor-pointer">Contacto</li>
            <li className="hover:text-gray-400 cursor-pointer border-t border-gray-700 pt-4 w-full text-center">Tienda</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
