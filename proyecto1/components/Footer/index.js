
const index = () => {
  return (
    <footer style={{ paddingTop: '10rem', textAlign: 'top' }}>
      <div style={{ backgroundColor: '#F1F8E8' ,textAlign: 'center', borderTop: '1px solid #dee2e6', paddingTop: '1rem' }}>
        <p className='text-left ml-64'>Contacto
          <br />
          Para más información sobre nuestros servicios o para agendar una cita, no dude en contactarnos. Estamos aquí
          para ayudarle a mantener sus dispositivos en las mejores condiciones posibles.
          <br />
          Teléfono: +56 9 1234 5678 <br />
          Correo Electrónico: contacto@cybertechchilean.cl <br />
          Dirección: Av. Siempre Viva 123, Santiago, Chile
        </p>
        <br />
        <p>&copy; {new Date().getFullYear()} CyberTech Chilean. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default index