import Folha from "@/../public/images/folhaAcompanhar.png"
import Mapa from "@/../public/images/mapa.png"
import Bateria from "@/../public/images/statusBateria.png"
import Image from "next/image";
import Link from "next/link";


export default function OpcoesFuncoes(){
    return(
        <div className="flex flex-col md:flex-row justify-around mt-10 h-auto md:h-[85vh] items-center">
        <div className="flex flex-col w-full md:w-[33.33%] h-[400px] justify-evenly items-center mb-6 md:mb-0">
          <Image src={Bateria} alt="Acompanhar uso energético"></Image>
          <h2 className="text-2xl text-center">Ver estado atual da bateria</h2>
          <p className="text-xl text-gray-500 text-center w-[85%]">Acompanhe a quantidade de bateria que o seu veículo ainda possui</p>
          <Link href={"/bateria"}>
             <button style={{ border: "2px solid var(--verde-claro)" }} className="bg-transparent text-black px-4 py-2 rounded-[20px] hover:bg-gray-200">VER BATERIA</button>
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-[33.33%] h-[400px] justify-evenly items-center mb-6 md:mb-0">
          <Image src={Mapa} alt="Acompanhar uso energético"></Image>
          <h2 className="text-2xl text-center">Descubra pontos de recarga</h2>
          <p className="text-xl text-gray-500 text-center w-[85%]">Veja os pontos de recarga mais próximo do seu veículo</p>
          <Link href={"/buscarPontos"}><button style={{ border: "2px solid var(--verde-claro)" }} className="bg-transparent text-black px-4 py-2 rounded-[20px] hover:bg-gray-200">BUSCAR RECARGA</button></Link>
        </div>
        <div className="flex flex-col w-full md:w-[33.33%] h-[400px] justify-evenly items-center">
          <Image src={Folha} alt="Acompanhar uso energético"></Image>
          <h2 className="text-2xl text-center">Calendário do consumo energético</h2>
          <p className="text-xl text-gray-500 text-center w-[85%]">Veja os pontos de recarga mais próximo do seu veículo</p>
          <Link href={"/calendarioUso"}><button style={{ border: "2px solid var(--verde-claro)" }} className="bg-transparent text-black px-4 py-2 rounded-[20px] hover:bg-gray-200">ACOMPANHAR</button></Link>
        </div>
      </div>
    )
}