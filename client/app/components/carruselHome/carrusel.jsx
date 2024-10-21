"use client";

import { useState } from "react";
import Image from "next/image";
import { RiWindyLine } from "react-icons/ri";

const productos = [
  {
    id: 1,
    nombre: "Vela Aromática",
    imagen: "/images/prueba.jpg",
    texto:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
    precio: "$1500",
  },
  {
    id: 2,
    nombre: "Difusor de Caña",
    imagen: "/images/prueba.jpg",
    texto:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
    precio: "$1500",
  },
  {
    id: 3,
    nombre: "Aceite Esencial",
    imagen: "/images/prueba.jpg",
    texto:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
    precio: "$1500",
  },
  {
    id: 3,
    nombre: "Aceite Esencial",
    imagen: "/images/prueba.jpg",
    texto:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam",
    precio: "$1500",
  },
];

export default function Carrusel() {

  
  return (
    <div className="w-full h-96 mx-auto relative">
      {/* Botones en la parte superior derecha */}
      <div className="absolute top-0 right-0 flex gap-5 p-2">
        {/* Botón anterior */}
        <button className="bg-white text-[#D35C8D] p-2 rounded-md shadow-md hover:bg-[#D35C8D] hover:text-white duration-150 w-16 h-10 mr-5">
          &#10094;
        </button>

        {/* Botón siguiente */}
        <button className="bg-white text-[#D35C8D] p-2 rounded-md shadow-md hover:bg-[#D35C8D] hover:text-white duration-150 w-16 h-10 mr-5">
          &#10095;
        </button>
      </div>

      {/* Contenedor del carrusel */}
      <div className="overflow-hidden mx-auto">
        <div
          className={`mt-12 flex justify-center items-center gap-4 duration-500 `}
        >
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="w-[300px] p-5 h-[400px] shadow-2xl m-5 rounded-lg"
            >
              <div className="w-full h-40 rounded-lg ">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="text-left mt-4 text-lg font-podkova text-[#9A0504] ">
                {producto.nombre}
              </div>
              <div className="text-left mt-4  font-podkova overflow-hidden h-20 text-[#9A0504] text-sm">
                {producto.texto}
              </div>

              <div className="flex items-center justify-between ">
                <div className="text-left font-podkova overflow-hidden h-20 text-[#D35C8D] text-xl flex items-center">
                  {producto.precio}
                </div>

                <div className="w-36 h-10 flex items-center justify-center text-[#D35C8D] bg-white border rounded-md shadow-md shadow-white hover:bg-[#D35C8D] hover:text-white duration-150 cursor-pointer ">
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
