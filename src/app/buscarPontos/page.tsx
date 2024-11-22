"use client";

import { useState } from "react";
import MapaPontos from "@/../public/images/mapaPontos.png";
import Folha from "@/../public/images/folhasFundo.png";
import Image from "next/image";

export default function BuscarPontos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirMapa = () => {
    setIsModalOpen(true);
  };

  const fecharMapa = () => {
    setIsModalOpen(false);
  };

  const pontos = [
    { lat: -23.625336547758145, lng: -46.6584138489513, nome: "ChargeGo 1", rua: "Vila Congonhas, São Paulo - SP, 04626-911", link: "https://maps.app.goo.gl/itLcmRPpzgbcBz4o8" },
    { lat: -22.906549710098904, lng: -43.17319070744876, nome: "ChargeGo 2", rua: "Av. Pres. Antônio Carlos - Centro, Rio de Janeiro - RJ, 20020-010", link: "https://maps.app.goo.gl/cHyoad3QDSxfZDRp8" },
    { lat: -25.4284, lng: -49.2733, nome: "ChargeGo 3", rua: "São Francisco, Curitiba - PR, 13484-015", link: "https://maps.app.goo.gl/WsT7cJrULx3nQxaz8"},
    { lat: -23.556399562591352, lng: -46.662069445592046, nome: "ChargeGo 4", rua: "Praça do Ciclista - Bela Vista, São Paulo - SP, 01415-002", link: "https://maps.app.goo.gl/efLLzCfoAUocUbZh6" },
  ];

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
      {isModalOpen && (
        <div className="fixed w-[90%] md:w-[600px] h-[90%] md:h-[600px] top-1/2 left-1/2 backdrop-opacity-20 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center z-10 shadow-lg rounded-lg">
          <div className="bg-white p-5 rounded-lg w-full h-full md:w-auto md:h-auto border border-gray-300 overflow-y-auto">
            <button onClick={fecharMapa} className="mt-3 p-2 pl-3 pr-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">X</button>    
            <div className="mt-4">
              <p className="text-2xl font-bold mb-4 text-center" style={{color: 'var(--verde-normal)'}}>PONTOS DE RECARGAS</p>
              {pontos.map((ponto) => (
                <div key={ponto.nome} className="mb-6">
                  <p className="font-bold text-2xl mb-2" style={{color: 'var(--verde-escuro)'}}>{ponto.nome}</p>
                  <p className="text-gray-600 mb-2">{ponto.rua}</p>
                  <a href={ponto.link} target="_blank" className="text-green-500 hover:underline">Ver no Google Maps</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
