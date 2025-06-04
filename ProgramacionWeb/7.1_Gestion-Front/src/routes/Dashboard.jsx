import React from 'react'
import {CircleArrowUp} from "lucide-react"
import {CircleArrowDown} from "lucide-react"
import Card from '../components/Card'

const Dashboard = () => {
    return (
        <>
        <h1 className='text-sky-800 text-3xl mt-3 font-bold'>Ultmimos 6 movimientos</h1>
        
        <ul className=' flex flex-col w-full h-full p-5 items-center gap-2'>
            <Card type="Ingreso" color="sky"/>
            <Card type="Egreso" color="rose"/>
            <Card type="Ingreso" color="sky"/>
            <Card type="Egreso" color="rose"/>
            <Card type="Ingreso" color="sky"/>
            <Card type="Egreso" color="rose"/>
           
        </ul>
        <p className='text-sky-600 text-rose-400 text-rose-600 text-sky-400 border-rose-400'></p>
        </>

    )
}

export default Dashboard