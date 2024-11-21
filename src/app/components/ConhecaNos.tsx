import Image from "next/image";
import FolhaFundo from "@/../public/images/folhasFundo.png"

export default function ConhecaNos(){
    return(
        <div className="flex">
          <div className="w-[50%] flex flex-col justify-around p-10">
            <h3 className="text-4xl" style={{color: "var(--verde-escuro)", fontWeight: 600}}>Que tal fazer uma escolha ainda mais sustentável hoje?</h3>
            <p className="text-3xl" style={{color: "var(--verde-normal)"}}>Nós da <span style={{color: "var(--verde-escuro)"}}>TRIA</span> estamos buscando cada vez mais formas de transformar o nosso futuro, em um futuro sustentável! </p>
            <button style={{ border: "2px solid var(--verde-claro)" }} className="bg-transparent text-black px-4 py-2 rounded-[20px] hover:bg-gray-200 w-[50%]">SAIBA MAIS SOBRE NÓS</button>
          </div>
          <div className="w-[50%] flex items-end">
            <Image src={FolhaFundo} alt="Folhas de fundo"></Image>
          </div>
        </div>
    )
}