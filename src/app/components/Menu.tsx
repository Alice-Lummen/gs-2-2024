import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/images/logoTria.png"

export default function Menu() {
    return (
      <nav className="fixed flex bg-green-700 w-full h-20 z-50 justify-between items-center px-8">
        <Link href={"/"}><div className="text-white font-bold"><Image src={Logo} alt="Logo Tria" className="h-10 w-full"></Image></div></Link>
        
        <div className="w-[50%]">
          <ul className="flex flex-row justify-around items-center text-white">
            <Link href={"/bateria"}><li>Bateria Atual</li></Link>
            <Link href={"/buscarPontos"}><li>Pontos de Recarga</li></Link>
            <Link href={"/calendarioUso"}><li>Calendário de Uso</li></Link>
            <Link href={"/tria"}><li>Sobre nós</li></Link>
          </ul>
        </div>
      </nav>
    );
  }
  