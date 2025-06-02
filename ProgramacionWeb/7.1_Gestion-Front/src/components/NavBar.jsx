import React from 'react'
import Dashboard from '../routes/Dashboard'

const NavBar = ({ruta, setRuta}) => {
  return (
    <nav className='w-full px-4 py-2'>
        <ul className='flex justify-between shadow bg-white'>
            <div className='flex gap-4 text-xl'>
                <li className={ (ruta=="/dashboard" ? "cursor-pointer text-sky-600 hover:text-slate-500": " cursor-pointer text-slate-600 hover:text-sky-500")} 
                onClick={()=>{setRuta("/dashboard")}}>
                Dashboard
            </li>
            <li className={ (ruta=="/categorias" ? "cursor-pointer text-sky-600 hover:text-slate-500": " cursor-pointer text-slate-600 hover:text-sky-500")} 
            onClick={()=>{setRuta("/categorias")}}>
                Categorias
            </li>
            <li className={ (ruta=="/movimientos" ? "cursor-pointer text-sky-600 hover:text-slate-500": " cursor-pointer text-slate-600 hover:text-sky-500")} 
            onClick={()=>(setRuta("/movimientos"))}>
                Movimientos
            </li>
            </div>
            <li className='cursor-pointer text-slate-600 hover:text-rose-500 text-xl' 
            onClick={()=>(setRuta("/"))}>
                Cerrar Sesión
            </li>
        </ul>
    </nav>
  )
}

export default NavBar