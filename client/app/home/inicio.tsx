import React from "react";
import { RiWindyLine } from "react-icons/ri";
import postreFresa from "../../public/images/postre_fresas.png";
import Image from "next/image";

export default function Inicio() {
  return (
    <section
      className="w-full h-auto min-h-[100vh] font-podkova"
      style={{ background: "linear-gradient(to right, #D35C8D, #EE9EBF);" }}
    >
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* textos */}
        <div className="p-5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl w-full md:w-[80vh] text-white font-semibold ">
            AROMAS QUE INSPIRAN, VELAS QUE RELAJAN.
          </h1>

          <h3 className="text-white text-xl md:text-2xl w-full md:w-[70vh] mt-4">
            ISAROMAS, El arte de perfumar, el placer de encender.
          </h3>

          <div className="mt-5 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* ver mas */}
            <button className=" md:w-32 w-48 h-12 flex items-center justify-center gap-2 text-[#D35C8D] bg-white border rounded-md shadow-md shadow-white hover:bg-[#D35C8D] hover:text-white duration-150">
              <RiWindyLine />
              Ver más
            </button>

            {/* texto */}
            <div className="text-white md:w-32 w-48 flex items-center justify-center">
              <div>
              <p className="font-semibold flex items-center gap-2">
                <RiWindyLine /> Velas de Soja
              </p>
              <p>Velas de Girasol </p>
              </div>
            </div>

            {/* texto */}
            <div className="text-white md:w-32 w-48 flex items-center justify-center">
            <div>
              <p className="font-semibold flex items-center gap-2">
                <RiWindyLine /> Velas de Soja
              </p>
              <p>Velas de Girasol </p>
              </div>
            </div>
          </div>
        </div>

        {/* imagen */}
        <div className="mt-10 md:mt-0">
          <Image
            src={postreFresa}
            width={500}
            height={500}
            alt="postre de fresa"
          />
        </div>
      </div>
    </section>
  );
}
