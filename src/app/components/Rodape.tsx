"use client"

import Link from "next/link";
import { useState } from "react";

export default function Rodape(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const abrirModal = () => {
        setIsModalOpen(true);
    }

    const duvidas = [{duvida: "O que é a TRIA?", descricao: "A TRIA é uma empresa formada por alunos da FIAP que busca automatizar processos com a tecnologia, contribuindo para um mundo melhor. Saiba mais sobre nós clicando no link abaixo.", link: "/tria"}, 
                    {duvida: "Como funciona a ChargeGo?", descricao: "A ChargeGo é bateria feita para carros elétricos e pessoas que desejam percorrer uma distância maior, sem precisar ir novamente em um ponto de recarga. Com ela, você possui uma bateria movel e fácil de transportar.", link: "/saibaMais"}, 
                    {duvida: "Vocês tem pontos de recarga?", descricao: "Sim, temos pontos de recarga para a sua bateria elétrica. Você pode encontrar os pontos de recarga no link abaixo.", link: "/buscarPontos"}]
    return(
        <footer className="w-[100%] h-20 flex flex-col justify-around items-center" style={{backgroundColor: "var(--verde-escuro)"}}>
            <p className="text-white">© 2024 TRIA. Todos os direitos reservados.</p>
            <p className="bg-slate-300 p-2 rounded-full text-green-700 hover:bg-slate-200 cursor-pointer" onClick={abrirModal}>Dúvidas?</p>
            {isModalOpen && (
                <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg w-[700px] h-[600px] flex flex-col gap-4 justify-center items-center shadow-lg">
                        <button className="bg-red-700 text-white p-2 rounded-full self-end" onClick={()=>setIsModalOpen(false)}>X</button>
                        <h2 className="text-3xl font-bold" style={{color: "var(--verde-normal)"}}>Dúvidas Frequentes</h2>

                        {duvidas.map((duvida,index)=>(
                            <div key={index} className="text-center">
                                <p className="text-xl font-medium text-verde-normal mb-5">{duvida.duvida}</p>
                                <p className="text-gray-700">{duvida.descricao}</p>
                                <Link onClick={()=>setIsModalOpen(false)} href={duvida.link} className="text-green-700 hover:underline">Saiba mais</Link>
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </footer>
    )
}