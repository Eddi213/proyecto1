import Link from "next/link"

const index = () => {
  return (
    <header className="flex items-center justify-between ">
    <Link href={"/"} className="ml-2 text-lime-300 text-3xl font-semibold">&#x1F9D1;&#x1F3FC;&#x200D;&#x1F4BB;CyberTech Chilean</Link>
    <nav className="flex mr-5 gap-5 items-center text-gray-600 font-semibold my-3">
      <span className="material-simbols-outlined">&#8594;</span>
      <Link href={"/"} className="hover:scale-110">Conócenos</Link>
      <Link href={"/"} className="hover:scale-110">Comprar</Link>
      <Link href={"/"} className="hover:scale-110 ">Servicio</Link>
      <Link href={"/"} className="align-middle hover:scale-110">Contacto</Link>
    </nav>
  </header>     
  )
}



export default index