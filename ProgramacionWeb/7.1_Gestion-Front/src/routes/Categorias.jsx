import { Blocks, Box } from 'lucide-react'
import React from 'react'

export const Categorias = () => {
  const categorias = [
    {
      name: "categoria 1"
    },
    {
      name: "categoria 2"
    },
    {
      name: "categoria 3"
    },
    {
      name: "categoria 4"
    }
  ]
  return (
    <section className='w-full h-full p-4'>
      <form className='w-full flex flex-col items-center' >
        <h1 className='text-3xl flex gap-3 items-center'>Categorias <Blocks /></h1>
        <div className='flex flex-col'>
          <label className=' font-bold text-slate-800'>Nombre:</label>
          <input className='focus:outline-none border border-2 border-sky-700 rounded px-2' type='text' placeholder='Gastos de casa...' required></input>
        </div>
        <div className='flex w-4/11 justify-end'>

          <button className='bg-sky-600 text-white px-4 py-1 rounded hover:bg-sky-800'>Agregar</button>
        </div>
      </form>
      <ul className='w-7/10 mx-auto mt-3'>{
        categorias.map((categoria, posicion) => {
          return (
            <li key={posicion} className=' my-2 shadow-lg ps-3 text-2xl hover:scale-102 transition duration-500 bg-white font-bold text-slate-600 '>
              {categoria.name}
            </li>
          )
        })
      }


      </ul>
    </section>
  )
}
