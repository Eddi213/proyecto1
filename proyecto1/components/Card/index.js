import Button from '@/components/Button'
import Image from 'next/image';

const index =({ dato={} }) => {
    return (
    <section>        
        <div className=' bg-slate-100 rounded-lg text-center hover:bg-slate-200'>
            <div className='flex justify-center p-4'>
                <Image className='object-cover rounded-md' src={'/assets/img/mockups/'+dato.imagen} 
                    width={150} height={150} alt='Producto' />
            </div>
            <h4 className='font-bold text-center'>{dato.nombre}</h4>
            <p>{dato.descripcion}</p>
            <p className='font-semibold scale-105'>{dato.precio}</p>
            <Button texto={'Añadir'} />
        </div>
    </section>
    
    )
}

export default index