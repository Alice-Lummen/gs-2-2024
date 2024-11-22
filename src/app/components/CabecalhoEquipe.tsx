import Folha from "@/../public/images/folhasFundo.png";
import Image from "next/image";

export default function CabecalhoEquipe() {
    return (
        <header className="relative flex flex-col h-[95vh] items-center justify-center">
            <Image
                src={Folha}
                alt="Folhas de fundo"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            />
            <div className="relative z-10 text-center">
                <h1 className="text-7xl text-white md:text-8xl" style={{color: "var(--verde-escuro)"}}>TRIA</h1>
                <p className="text-2xl text-white" style={{color: "var(--verde-normal)"}}>Quem somos nós?</p>
            </div>
        </header>
    );
}
