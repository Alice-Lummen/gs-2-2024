import Musgo from "@/../public/images/musgoMoldura.png";
import Image from "next/image";
import Folha from "@/../public/images/folhasFundo.png";
import ChangeGo from "@/../public/images/changeGo.png";
import Link from "next/link";

export default function Bateria() {
  return (
    <main className="relative w-full">
        <div className="flex w-full justify-between">
            <div className="flex flex-col mt-20 w-[70%] justify-evenly items-center h-[85vh]">
                <h3 className="text-2xl">Sua bateria atual:</h3>
                <h4 className="text-9xl" style={{color: "var(--cinza-base)", fontWeight: 700}}>40%</h4>
                <button className="p-5 bg-green-800 rounded-3xl text-white hover:bg-green-700">TROCAR PARA QUILOMETRAGEM</button>
                <Link className="text-xl underline hover:cursor-pointer" href="#btnHabilita">Habilitar ChangeGO</Link>
            </div>
        <div>
            <Image src={Musgo} alt="Musgo"/>
        </div>
     </div>

     {/* ABAIXO 2° */}
     {/* tirar mb dps */}
     <div className="flex flex-col w-full h-[90vh] mb-10 overflow-hidden items-center" style={{backgroundColor: "var(--verde-escuro)"}}> 
        <Image src={Folha} alt="" className="h-[20%] w-full object-cover object-bottom opacity-35" />
        <div className="flex w-[70%]">
            <div className="w-[50%] flex items-center justify-center">
                <Image src={ChangeGo} alt="carregador por indução ChangeGo"></Image>
            </div>
            <div className="w-[50%] flex flex-col items-center justify-evenly">
                <h3 className="text-white text-2xl">Bateria disponível ChangeGO:</h3>
                <h4 className="text-9xl" style={{color: "white", fontWeight: 700}}>40%</h4>
                <p className="text-gray-300 text-3xl">30km/h</p>
            </div>
        </div>
        <button id="btnHabilita" className="p-5 bg-green-800 rounded-3xl w-[30%] text-white mt-10 hover:bg-green-700">HABILITAR</button>
    </div>




    </main>
  );
}
