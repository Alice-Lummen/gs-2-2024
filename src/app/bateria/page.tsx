"use client";

import Musgo from "@/../public/images/musgoMoldura.png";
import Image from "next/image";
import Folha from "@/../public/images/folhasFundo.png";
import ChargeGo from "@/../public/images/chargeGo.png";
import carga from "@/../carga.json";
import { useEffect } from "react";
import { useState } from "react";
import { Carregando } from "../components/Carregando";

export default function Bateria() {
    const [bateria, setBateria] = useState(0);
    const [visibilidade, setVisibilidade] = useState(false);
    const [carregador, setCarregador] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsReady(true), 2000); // Define um timeout de 2 segundos antes de marcar como pronto

        carga.map((carga) => {
            if (carga.kwh <= carga.bateriaTotal) {
                const utilizado = ((carga.kwh / carga.bateriaTotal) * 100);
                const porcentagem = (100 - Number(utilizado)).toFixed(1);
                setBateria(Number(porcentagem));
            } else {
                console.error("Erro: kWh utilizado é maior que a bateria total.");
                setBateria(0); 
            }
        })
    }, [])


    
        if (!isReady) {
            return Carregando();
        }

    const previsaoPorQuilometragem = () => {
        if (carga.length > 0 && carga[0].kwh <= carga[0].bateriaTotal) {
            const distancia = carga[0].kwh - carga[0].bateriaTotal;
            const previsao = (((distancia * 100) / 15.8) * -1).toFixed(1);
            return previsao;
        }
        return 0; 

   const [modalVisivel, setModalVisivel] = useState(false); 

  const mudarCarregador = () => {
    setCarregador(!carregador);
  };

  const abrirModal = () => {
    setModalVisivel(true); 
  };

  const fecharModal = () => {
    setModalVisivel(false); 
  };

  const confirmarDesabilitacao = () => {
    setCarregador(false); 
    setModalVisivel(false); 
  };

  const mudarVisibilidade = () => {
    setVisibilidade(!visibilidade);
  };

  return (
    <main className="relative w-full">
      <div className="flex flex-col md:flex-row w-full justify-between">
        {!visibilidade ? (
          <div className="flex flex-col mt-20 w-full md:w-[70%] justify-evenly items-center h-[85vh]">
            <h3 className="text-2xl">Sua bateria atual:</h3>
            {carregador ? (
              <>
                <h4
                  className="text-6xl md:text-9xl"
                  style={{ color: "var(--verde-normal)", fontWeight: 700 }}
                >
                  {bateria}%
                </h4>
                <p className="text-lg md:text-xl text-green-500">
                  ChargeGO habilitada
                </p>
              </>
            ) : (
              <>
                <h4
                  className="text-6xl md:text-9xl"
                  style={{ color: "var(--cinza-base)", fontWeight: 700 }}
                >
                  {bateria}%
                </h4>
                <p className="text-lg md:text-xl text-yellow-500">
                  ChargeGO desabilitada
                </p>
              </>
            )}
            <button
              className="p-3 md:p-5 bg-green-800 rounded-3xl text-white hover:bg-green-700"
              onClick={mudarVisibilidade}
            >
              PREVISÃO POR QUILOMETRAGEM
            </button>
          </div>
        ) : (
          <div className="flex flex-col mt-20 w-full md:w-[70%] justify-evenly items-center h-[85vh]">
            <h2 className="text-2xl">Distância máxima a ser percorrida</h2>
            <h3
              className="text-6xl md:text-9xl"
              style={{ color: "var(--cinza-base)", fontWeight: 700 }}
            >
              {previsaoPorQuilometragem()} km
            </h3>
            <button
              className="p-3 md:p-5 bg-green-800 rounded-3xl text-white hover:bg-green-700"
              onClick={mudarVisibilidade}
            >
              VER BATERIA DISPONÍVEL
            </button>
          </div>
        )}

        <div className="hidden md:block">
          <Image src={Musgo} alt="Musgo" />
        </div>
      </div>

      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        style={{ display: modalVisivel ? "flex" : "none" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-lg mb-4">
            Você deseja desabilitar o ChargeGO?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="p-2 bg-red-500 text-white rounded hover:bg-red-400"
              onClick={confirmarDesabilitacao}
            >
              Sim
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:bg-gray-200"
              onClick={fecharModal}
            >
              Não
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-[95vh] mb-10 overflow-hidden items-center" style={{ backgroundColor: "var(--verde-escuro)" }}>
        <Image
          src={Folha}
          alt=""
          className="h-[20%] w-full object-cover object-bottom opacity-35"
        />
        <div className="flex flex-col md:flex-row w-full md:w-[70%]">
          <div className="w-full md:w-[40%] flex items-center justify-center">
            <Image
              src={ChargeGo}
              alt="carregador por indução ChangeGo"
              className="w-full h-auto max-w-[300px] md:max-w-[300px] object-contain"
            />
          </div>

          <div className="w-full md:w-[50%] flex flex-col items-center justify-evenly">
            <h3 id="caminho" className="text-white text-2xl">
              Bateria disponível ChargeGO:
            </h3>
            <h4
              className="text-4xl md:text-9xl"
              style={{ color: "white", fontWeight: 700 }}
            >
              40%
            </h4>
            <p className="text-gray-300 text-2xl md:text-3xl">30km/h</p>
          </div>
        </div>
        {carregador ? (
            <>
            <div className="fixed top-32 left-10 w-24 md:w-20 h-20 md:h-20 p-5 items-center justify-center rounded-full animate-float bg-green-800 transition-opacity duration-500 opacity-100 hover:opacity-0">
                <Image src={ChargeGo} alt="carregador por indução ChangeGo"></Image>
            </div>
            <button
              className="p-3 md:p-5 bg-green-800 rounded-3xl w-[60%] md:w-[30%] text-white hover:bg-green-700"
              onClick={abrirModal}
            >
              DESABILITAR
            </button>
          </>
        ) : (
          <button
            id="btnHabilita"
            className="p-3 md:p-5 bg-green-800 rounded-3xl w-[60%] md:w-[30%] text-white hover:bg-green-700"
            onClick={mudarCarregador}
          >
            HABILITAR
          </button>
        )}
      </div>
    </main>
  );
}
