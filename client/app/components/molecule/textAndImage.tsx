import Imagen from "../atoms/imagen";
import Title from "../atoms/title";

export default function TextAndImage() {
  return (
<div className="flex flex-col md:flex-row items-center justify-between">
  <div className="w-full md:w-[50%] flex flex-col items-center justify-center h-72 md:h-96 bg-[#BBA692] text-white p-4">
    <Title title="DESCUBRE ISAROMAS" size="4xl" />

    <Title
      title="Descubre Velas aromáticas y aceites esenciales de calidad, sostenibles y naturales."
      size="lg md:text-xl"
    />
  </div>
  <div className="w-full md:w-[50%] flex items-center justify-center h-72 md:h-96">
    <Imagen ruta="/imagenPortada.jpg" />
  </div>
</div>

  );
}
