import Terra from "@/../public/images/terra.png"
import ChargeGo from "@/../public/images/chargeGo.png";
import Celular from "@/../public/images/celularChange.png";
import Image from "next/image"

export default function SaibaMais(){
    return(
        <main>
            <header className="flex h-[90vh] items-center">
                <div className="flex flex-col w-[50%] justify-center items-center">
                    <h3 className="text-xl">O QUE É A</h3>
                    <h2 className="text-5xl mt-10 font-bold"><span style={{color: "var(--verde-escuro)"}}>Charge</span><span className="text-green-700">GO</span></h2>
                </div>
                <div className="w-[50%]">
                    <Image src={ChargeGo} alt="ChargeGo" className="w-[90vw] opacity-25"></Image>
                </div>
            </header>

            <div className="flex h-[90%] w-full justify-around p-20">
                <Image src={ChargeGo} alt="Placa por induçãp ChangeGo" className="animate-float"></Image>
                <div className="w-[50%] flex flex-col items-center justify-center text-2xl font-medium" style={{color: "var(--cinza-base)"}}>
                    <p>A <span style={{color: "var(--verde-escuro)"}}>ChargeGO</span> trata-se de uma placa de carregamento automotivel por indução, que funciona como uma bateria extra.</p>
                    <p className="mt-5">Ela possui um ima,  que deve ser fixado na parte inferior do veículo.</p>
                </div>
            </div>

            <div className="flex h-[90vh] w-full text-white text-3xl" style={{backgroundColor: "var(--verde-escuro)"}}>
            <div className="w-[33.33%] flex flex-col justify-center items-end ">
                    <p className="w-72">Acompanha o status da bateria do veículo </p>
                    <p className="mt-8 w-72">Carrega o seu veículo </p>
                </div>
                <div className="w-[33.33%] flex flex-col justify-center items-center">
                    <Image src={Celular} alt=" celular com imagem do site do ChangeGo" className=""></Image>
                </div>
                <div className="w-[33.33%] flex flex-col justify-center items-center">
                    <p className="w-72">Percorre viagens mais longas </p>
                    <p className="mt-8 w-72">Recebe dicas para seu veículo</p>
                </div>
            
            </div>

            <div className="flex h-[90vh] items-center justify-center">
                <div className="w-[50%] flex items-center justify-center">
                <Image 
                    src={Terra} 
                    alt="Planeta terra girando" 
                    className="w-64 h-64 animate-spin-slow">
                </Image>
                 </div>
                 <div className="w-[50%]" style={{color: "var(--verde-escuro)"}} >
                    <h3 className="text-4xl font-bold">Com a ChargeGo,</h3>
                    <p className="w-[70%] text-2xl mt-5">a transformação rumo ao <span className="italic" style={{color: "var(--verde-normal)"}}>mundo sustentável</span> que tanto precisamos fica mais próxima do que nunca</p>
                 </div>
            </div>

        </main>
    )
}