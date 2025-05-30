import {CircleArrowUp} from "lucide-react"
import {CircleArrowDown} from "lucide-react"
import React from 'react'

const Card = ({type, color}) => {
  return (
    <li className="p-2 bg-zinc-800 text-white rounded flex justify-between
            lg:w-7/10">
                <div>
                    
                    <p className={`flex text-2xl font-bold text-${color}-600 items-center gap-3`}>
                        {type=="Ingreso"? (<CircleArrowUp size={35} strokeWidth={3}/>):
                        (<CircleArrowDown size={35} strokeWidth={3}/>)}
                        Descripcion</p>
                    <p className='text-sm text-stone-400'>Categoria</p>
                </div>

                <div>
                    <p className={`text-xl font-bold text-${color}-400 text-end`}>$1000</p>
                    <p className='text-sm text-stone-400'>05/06/2025</p>
                </div>

            </li>
  )
}

export default Card