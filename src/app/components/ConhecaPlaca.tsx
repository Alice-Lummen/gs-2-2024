import Placa from "@/../public/images/chargeGo.png";
import Image from "next/image";
import Link from "next/link";

export default function ConhecaPlaca(){
    return(
        <div style={{ backgroundColor: "var(--verde-escuro)" }} className="flex flex-col md:flex-row h-auto md:h-[85vh] p-6 md:p-12">
          <div className="flex w-full md:w-[50%] justify-center mb-6 md:mb-0">
            <Image 
              src={Placa} 
              alt="Placa de indução"
              className="object-contain animate-float" 
            />
          </div>
          <div className="flex flex-col w-full md:w-[50%] justify-center items-center text-center">
            <h3 className="text-3xl md:text-5xl text-white mb-6 md:mb-10">Saiba mais sobre a ChargeGO!</h3>
            <p className="text-xl md:text-2xl text-gray-400 text-center">Placa por indução? Veículo ainda mais sustentável?</p>
            <p className="text-xl md:text-2xl text-gray-400 text-center">Clique no botão e saiba mais sobre o projeto!</p>
            <Link href={"/saibaMais"}>
              <button style={{ border: "4px solid var(--verde-normal)" }} className="bg-transparent text-white px-4 py-2 rounded-[20px] hover:opacity-80 mt-8 md:mt-14">QUERO SABER MAIS</button>
            </Link>
          </div>
        </div>
    )
}