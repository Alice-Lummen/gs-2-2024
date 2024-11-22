"use client";

import { useState, useEffect } from "react";
import MapaPontos from "@/../public/images/mapaPontos.png";
import Folha from "@/../public/images/folhasFundo.png";
import Image from "next/image";
import Mapa from "../components/Mapa";

export default function BuscarPontos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const abrirMapa = () => {
    setIsModalOpen(true);
  };

  const fecharMapa = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="relative w-full h-[95vh] flex flex-col justify-center items-center">
      <Image
        src={Folha}
        alt="Folhas de fundo"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center font-bold">
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <h2
            className="text-2xl md:text-4xl w-[80%] md:w-[60%] text-center md:text-left"
            style={{ color: "var(--verde-escuro)" }}
          >
            Principais pontos de recarga da ChargeGo
          </h2>
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center mt-4 md:mt-0">
          <Image
            src={MapaPontos}
            alt="Mapa de pontos para recarga do veículo"
            className="w-64 md:w-96 animate-float"
          />
        </div>
      </div>

      {/* Botão */}
      <button onClick={abrirMapa} className="relative z-10 p-3 md:p-5 bg-green-800 rounded-3xl w-[60%] md:w-[20%] text-white mt-10 md:mt-20 hover:bg-green-700">
        BUSCAR
      </button>

      {/* Modal */}
      {isClient && isModalOpen && (
        <div className="fixed w-[90%] md:w-[600px] h-[90%] md:h-[600px] top-1/2 left-1/2 backdrop-opacity-20 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded-lg w-full h-full md:w-auto md:h-auto">
            <button onClick={fecharMapa} className="mt-3 p-2 pl-3 pr-3 bg-red-500 text-white rounded">X</button>    
            <Mapa />
            <h2 className="text-lg md:text-xl text-center font-bold" style={{color: 'var(--verde-normal)'}}>Mapa de Pontos</h2>
          </div>
        </div>
      )}
    </main>
  );
}
