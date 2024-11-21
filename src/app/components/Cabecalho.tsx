import Image from "next/image";
import Fundo from "@/../public/images/fundoPrincipal.png";
import Onibus from "@/../public/images/onibusVerde.png"

export default function Cabecalho() {
    return (
        <header style={{ position: "relative", width: "100%", height: "100vh", display: "flex", justifyContent:"center", alignItems:"center", overflowX: "hidden"}}>
            <Image
                src={Fundo}
                alt="fundo página principal"
                fill
                style={{ objectFit: "cover" }}
            />
            <div className="flex absolute w-[80vw] h-[92vh] z-10 justify-center items-center rounded-3xl p-10" style={{backgroundColor: "var(--verde-escuro)"}}>
                <div className="flex w-full h-full justify-center items-center">
                    <p style={{color: "white", fontSize: 46, fontWeight: 700}}>
                    Olá!<br/>
                    vamos <span className="text-green-300">tria</span>r um caminho mais sustentável
                    </p>
                </div>
                <div className="flex w-full h-full justify-center items-center" >
                    <Image 
                    src={Onibus}
                    alt="Onibus sustentável"
                    className="max-w-full max-h-full object-contain"
                    ></Image>
                </div>
            </div>
        </header>
    );
}
