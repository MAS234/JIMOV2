import React from "react";
import { RiWindyLine } from "react-icons/ri";
import postreFresa from "../../public/images/postre_fresas.png";
import Image from "next/image";
import Carrusel from "../components/carruselHome/carrusel.jsx";

// ICON
import { GiCandlebright } from "react-icons/gi";

export default function Inicio() {
  return (
    <>
      <header
        className="w-full h-auto min-h-[100vh] font-podkova"
        style={{ background: "linear-gradient(to right, #D35C8D, #EE9EBF);" }}
      >
        <div className="flex flex-col lg:flex-row justify-around items-center px-4 md:px-8">
          {/* textos */}
          <div className="p-5 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl w-full lg:w-[80vh] text-white font-semibold">
              AROMAS QUE INSPIRAN, VELAS QUE RELAJAN.
            </h1>

            <h3 className="text-white text-lg sm:text-xl lg:text-2xl w-full lg:w-[70vh] mt-4">
              ISAROMAS, El arte de perfumar, el placer de encender.
            </h3>

            <div className="mt-5  justify-center grid grid-cols-1 md:grid-cols-3 items-center gap-6 lg:gap-12">
              {/* ver más */}

              <div className="w-40 sm:w-32 h-12 flex items-center justify-center gap-2 text-[#D35C8D] bg-white border rounded-md shadow-md shadow-white m-auto hover:bg-[#D35C8D] hover:text-white duration-150 cursor-pointer">
                <RiWindyLine />
                Ver más
              </div>

              {/* texto 1 */}
              <div className="text-white w-full sm:w-auto flex items-center justify-center">
                <div className="text-center lg:text-left">
                  <p className="font-semibold flex items-center gap-2 justify-center lg:justify-start">
                    <RiWindyLine /> Velas de Soja
                  </p>
                  <p>Velas de Girasol</p>
                </div>
              </div>

              {/* texto 2 */}
              <div className="text-white w-full sm:w-auto flex items-center justify-center">
                <div className="text-center lg:text-left">
                  <p className="font-semibold flex items-center gap-2 justify-center lg:justify-start">
                    <RiWindyLine /> Velas de Soja
                  </p>
                  <p>Velas de Girasol</p>
                </div>
              </div>
            </div>
          </div>

          {/* imagen */}
          <div className="mt-10 lg:mt-0">
            <Image
              src={postreFresa}
              width={500}
              height={500}
              alt="postre de fresa"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* CARRUSEL Y MEJORES PRODUCTOS  */}
      <section className="flex  flex-col ">
        <div className="flex items-center justify-center w-full mt-10">
          <h1 className="text-4xl text-center m-5 ml-16 text-[#EA94B8] font-podkova flex items-center">
            ¡NUESTRA COLECCIÓN MÁS POPULAR!
            <GiCandlebright className=" text-[#D35C8D]" />
          </h1>
        </div>

        {/* CARRUSEL */}
        <Carrusel/>

        <div className="flex items-center justify-center w-full mt-5">
          <h1 className="text-4xl text-center m-5 ml-16 text-[#EA94B8] font-podkova flex items-center">
            ¡VENI Y DISFRUTA DE NUESTROS PRODUCTOS!
            <GiCandlebright className=" text-[#D35C8D]" />
          </h1>
        </div>
      </section>
    </>
  );
}
