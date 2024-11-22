"use client"

import Link from "next/link";

export default function Crud(){
    return(
        <main className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center font-bold mb-2 text-green-700">CRUD</h2>
            <p className="text-center mb-4 font-bold">O que vamos ver hoje?</p>
            <div className="flex flex-row gap-2">
                <Link href={'/carros'}>
                    <button className="bg-green-700 text-white text-xl p-2 rounded-md hover:bg-green-800">Ver Carros</button>
                </Link>
                <Link href={'/baterias'}>
                    <button className="bg-green-700 text-white text-xl p-2 rounded-md hover:bg-green-800">Ver Baterias</button>
                </Link>
                <Link href={'/chargego'}>
                    <button className="bg-green-700 text-white text-xl p-2 rounded-md hover:bg-green-800">Ver ChargeGo</button>
                </Link>
            </div>
        </main>
    )
}