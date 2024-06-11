import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import products from "@/mockup/productos.json"



export default function Home() {
  const productos = products
  return (
    <div>
      <Header />
      <Hero />
      <div>
        <h2 className='font-bold text-center text 2x1'>
          ¿Quiénes Somos?
        </h2>
        <p className="text-center">
          CyberTech Chilean es una empresa dedicada a la mantención y reparación de tecnología con años de experiencia en el mercado chileno. Nos enorgullecemos de
          ofrecer soluciones rápidas y eficaces para todos sus dispositivos electrónicos. Nuestro equipo de técnicos
          está altamente capacitado y comprometido con la excelencia, asegurando que cada cliente reciba un servicio personalizado y de alta calidad.
        </p>
        <h2 className='font-bold text 2x1 text-center m-4'> Servicios</h2>
        <div className='grid grid-cols-4 gap-4'>
          {productos.data.map((element, index) => {
            return (<Card key={element.id} dato={element} />)
          })}
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  )
}

