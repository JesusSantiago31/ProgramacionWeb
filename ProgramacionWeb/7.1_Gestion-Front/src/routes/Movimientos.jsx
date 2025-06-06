import { Search } from 'lucide-react'
import React from 'react'
import Card from '../components/Card'
const Movimientos = () => {
  return (
    <section className='w-full'>
        <form className='bg-white shadow text-center flex flex flex-col items-center px-auto'>
            <h1 className='text-3xl'>Movimientos  </h1>
            <div className='flex flex-col w-fit items-start'>
                <label className='text-sky-600'>Description:</label>
                <textarea rows={2} className='w-[300px] border border-sky-400 focus: outline-none focus: border-rose-400'></textarea>
            </div>
            <div className='flex flex-col w-fit items-start'>
                <label className='text-slate-600'> Monto </label>
                <input type="number" className='w-[300px] bg-stone-50 border border-sky-400 focus: outline-none focus: border-rose-400'/>
            </div>
            <div className='flex flex-col w-fit items-start'>
                <label>Tipo</label>
                <select className='w-[300px] border border-sky-400 focus: outline-none focus: border-rose-400'>
                    <option value="ingreso">Ingreso</option>
                    <option value="egreso">Egreso</option>
                </select>
            </div>
            <div className='flex flex-col w-fit items-start'>
                <label>Categoria</label>
                <select className='w-[300px] border border-sky-400 focus: outline-none focus: border-rose-400' >
                    <option value="1">Categoria1</option>
                    <option value="2">Categoria 2</option>
                    <option value="3">Categoria 3</option>
                    <option value="4">Categoria 4</option>
                </select>
            </div>
            <div className='flex justify-end w-[300px] ' >
                <button className='bg-rose-400 text-white rounded px-4 py-1 hover:bg-rose-60  mt-3 mb-3'>Agregar</button>
            </div>
        </form>
        <form className='w-full flex justify-end'>
            <div className='flex items-center mt-3 border-b me-3 gap-2' >
            <Search/>
            <input type="text" placeholder='Filtrar Resultados' className='focus: outline-none' />
            </div>
        </form>
        <ul className=' flex flex-col w-full h-full p-5 items-center gap-2'>
            <Card type="Ingreso" color="sky"/>
            <Card type="Egreso" color="rose"/>
            <Card type="Ingreso" color="sky"/>
            <Card type="Egreso" color="rose"/>
            <Card type="Ingreso" color="sky"/>
            <Card type="Egreso" color="rose"/>
           
        </ul>
    </section>
  )
}

export default Movimientos