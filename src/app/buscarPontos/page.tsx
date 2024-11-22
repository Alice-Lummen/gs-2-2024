"use client";

import { useState } from "react";
import MapaPontos from "@/../public/images/mapaPontos.png";
import Folha from "@/../public/images/folhasFundo.png";
import Image from "next/image";
import Mapa from "../components/Mapa";

export default function BuscarPontos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <div className="relative z-10 flex justify-center items-center font-bold">
        <div className="w-[50%] flex justify-center items-center">
          <h2
            className="text-4xl w-[50%]"
            style={{ color: "var(--verde-escuro)" }}
          >
            Principais pontos de recarga de veículos elétricos
          </h2>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <Image
            src={MapaPontos}
            alt="Mapa de pontos para recarga do veículo"
            className="w-96 animate-float"
          />
        </div>
      </div>

      {/* Botão */}
      <button onClick={abrirMapa} className="relative z-10 p-5 bg-green-800 rounded-3xl w-[30%] text-white mt-10 hover:bg-green-700">
        BUSCAR
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed w-[600px] h-[600px] top-1/2 left-1/2 backdrop-opacity-20 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded-lg">
            <button onClick={fecharMapa} className="mt-3 p-2 bg-red-500 text-white rounded">X</button>    
            <Mapa />
            <h2>Mapa de Pontos</h2>
          </div>
        </div>
      )}
    </main>
  );
}
