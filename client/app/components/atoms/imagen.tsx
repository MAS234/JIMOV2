type Props = {
    ruta: string;
}

export default function Imagen({ruta}: Props) {
  return (
    <>
      <img src={ruta} className="w-full h-full object-cover"/>
    </>
  )
}
