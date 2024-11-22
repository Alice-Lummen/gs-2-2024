"use client";

import Folha from "@/../public/images/folhasFundo.png";
import Image from "next/image";
import { useState } from "react";
import db from "@/../db.json";

export default function CalendarioUso() {
    const [slides] = useState(db.slides || []);
    const [atual, setAtual] = useState(0);
    const [animar, setAnimar] = useState(false);

    const prev = () => {
        ativarAnimacao(); 
        setAtual(atual === 0 ? slides.length - 1 : atual - 1); 
    };

    const next = () => {
        ativarAnimacao(); // Ativa a animação
        setAtual((atual + 1) % slides.length); 
    };

    const ativarAnimacao = () => {
        setAnimar(true); 
        setTimeout(() => setAnimar(false), 300);
    };

    const indicadorCentral = Math.floor(3 / 2);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="relative w-full h-[25vh] mb-10 overflow-hidden">
                <Image
                    src={Folha}
                    alt="Folhas de fundo"
                    className="w-full h-full object-cover object-bottom opacity-35"
                />
            </div>
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-green-800">
                    Calendário do Uso Energético
                </h1>
            </div>

            <div className="relative overflow-hidden w-full md:w-[80%]">
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{
                        transform: `translateX(-${atual * (100 / slides.length)}%)`,
                        width: `${slides.length * 100}%`,
                    }}
                >
                    {slides.map((s, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex flex-col items-center h-[60vh] md:h-[80vh]"
                            style={{ width: `${100 / slides.length}%` }}
                        >
                            <p className="text-lg md:text-2xl text-gray-700">Bateria ChargeGo: {s.bateria}%</p>
                            <p className="text-2xl md:text-4xl m-4 md:m-14 font-semibold text-center" style={{color: "var(--verde-escuro)"}}>{s.diaSemana}</p>
                            <p className="text-xl md:text-3xl font-semibold" style={{color: "var(--verde-normal)"}}>Consumo</p>
                            <p className="text-lg md:text-2xl text-gray-700">{s.porcentagem}%</p>
                        </div>
                    ))}
                </div>

                {/* Botões */}
                <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4">
                    <button
                        className="text-2xl md:text-3xl font-black p-1 rounded-full shadow bg-green-500 pr-2 md:pr-4 pl-2 md:pl-4 text-gray-800 hover:bg-green-600"
                        onClick={prev}
                    >
                        {"<"}
                    </button>
                    <button
                        className="text-2xl md:text-3xl font-black p-1 rounded-full shadow bg-green-500 pr-2 md:pr-4 pl-2 md:pl-4 text-gray-800 hover:bg-green-600"
                        onClick={next}
                    >
                        {">"}
                    </button>
                </div>

                {/* Indicadores */}
                <div className="absolute bottom-24 md:bottom-48 right-0 left-0">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                        {Array.from({ length: 3 }).map((_, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`transition-all rounded-full ${
                                        animar
                                            ? "scale-75 bg-green-800"
                                            : "scale-100 bg-green-700"
                                    } ${
                                        i === indicadorCentral ? "p-1 md:p-2" : "bg-opacity-50"
                                    }`}
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
