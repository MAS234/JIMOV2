import TextAndButton from "../molecule/textAndButton";
import Title from "../atoms/title";
import TextAndImage from "../molecule/textAndImage";
export default function SectionInfo() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 m-5 space-y-4 md:space-y-0 md:space-x-8">
        <Title
          title="¡Descubre nuestros productos más vendidos y promociones!"
          size="4xl"
        />
        <TextAndButton
          title="Explora nuestra selección de velas aromáticas de soja y aceites esenciales de alta calidad."
          size="2xl"
        />
      </div>

      <div>
        <TextAndImage />
      </div>
    </>
  );
}
