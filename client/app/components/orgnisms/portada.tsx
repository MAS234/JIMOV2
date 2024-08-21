import React from "react";

type Props = {};

export default function Portada() {
  return (
    <div>
      <div className="w-full h-[90dvh] bg-black absolute z-10 opacity-35"></div>
      <section className="w-full h-[90dvh]">
        <img
          src="/imagenPortada.jpg"
          alt="prueba"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
}
