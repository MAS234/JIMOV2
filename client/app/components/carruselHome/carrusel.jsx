"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RiWindyLine } from "react-icons/ri";
import productos from "./productos.js";

export default function Carrusel() {
  const [itemsPerView, setItemsPerView] = useState(3); // Default to 3 items

  useEffect(() => {
    const updateItemsPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        setItemsPerView(1); // 1 item for small screens (mobile)
      } else if (screenWidth <= 768) {
        setItemsPerView(2); // 2 items for medium screens
      } else {
        setItemsPerView(3); // 3 items for large screens
      }
    };

    window.addEventListener("resize", updateItemsPerView);
    updateItemsPerView(); // Execute once on load

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  return (
    <div className="w-full mx-auto relative">
      {/* Contenedor del carrusel */}
      <div className="overflow-hidden m-auto flex justify-center mt-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 m-auto transition-all duration-300`}
        >
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="w-80 p-5 h-[400px] shadow-2xl rounded-lg" // Fixed dimensions for the cards
            >
              <div className="w-full h-40 rounded-lg">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={100}
                  height={100}
                  className="w-full h-44 rounded-md"
                />
              </div>
              <div className="text-left mt-6 text-lg font-podkova text-[#9A0504]">
                {producto.nombre}
              </div>
              <div className="text-left mt-4 font-podkova overflow-hidden h-20 text-[#9A0504] text-sm">
                {producto.texto}
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="text-left font-podkova text-[#D35C8D] text-xl">
                  {producto.precio}
                </div>

                <div className="w-36 h-10 flex items-center justify-center text-[#D35C8D] bg-white border rounded-md shadow-md hover:bg-[#D35C8D] hover:text-white duration-150 cursor-pointer">
                  <RiWindyLine />
                  <span className="ml-1">Ver más</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
