import Image from "next/image";
import FolhaFundo from "@/../public/images/folhasFundo.png"

export default function ConhecaNos(){
    return(
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-around p-5 md:p-10">
            <h3 className="text-2xl md:text-4xl" style={{color: "var(--verde-escuro)", fontWeight: 600}}>Que tal fazer uma escolha ainda mais sustentável hoje?</h3>
            <p className="text-xl md:text-3xl" style={{color: "var(--verde-normal)"}}>Nós da <span style={{color: "var(--verde-escuro)"}}>TRIA</span> estamos buscando cada vez mais formas de transformar o nosso futuro, em um futuro sustentável! </p>
            <button style={{ border: "2px solid var(--verde-claro)" }} className="bg-transparent text-black px-4 py-2 rounded-[20px] hover:bg-gray-200 w-full md:w-[50%]">SAIBA MAIS SOBRE NÓS</button>
          </div>
          <div className="w-full md:w-[50%] flex items-end">
            <Image src={FolhaFundo} alt="Folhas de fundo" className="w-full h-[10vh] md:h-auto object-cover"></Image>
          </div>
        </div>
    )
}