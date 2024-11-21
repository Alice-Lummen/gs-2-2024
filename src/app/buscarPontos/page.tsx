import MapaPontos from "@/../public/images/mapaPontos.png";
import Folha from "@/../public/images/folhasFundo.png";
import Image from "next/image";

export default function BuscarPontos() {
  return (
    <main className="relative w-full h-[95vh] flex flex-col justify-center items-center">
      {/* Imagem de fundo */}
      <Image
        src={Folha}
        alt="Folhas de fundo"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Conteúdo */}
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
            className="w-96"
          />
        </div>
      </div>

      {/* Botão */}
      <button className="relative z-10 p-5 bg-green-800 rounded-3xl w-[30%] text-white mt-10 hover:bg-green-700">
        BUSCAR
      </button>
    </main>
  );
}
