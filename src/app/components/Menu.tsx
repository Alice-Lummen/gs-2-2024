import Link from "next/link";

export default function Menu() {
    return (
      <nav className="fixed flex bg-green-700 w-full h-20 z-50 justify-between items-center px-8">
        {/* Logo */}
        <Link href={"/"}><div className="text-white font-bold">LOGO</div></Link>
        
        {/* Menu */}
        <div className="w-[50%]">
          <ul className="flex flex-row justify-around items-center text-white">
            <Link href={"/bateria"}><li>Bateria Atual</li></Link>
            <Link href={"/buscarPontos"}><li>Pontos de Recarga</li></Link>
            <Link href={""}><li>Calendário de Uso</li></Link>
            <Link href={""}><li>Sobre nós</li></Link>
          </ul>
        </div>
      </nav>
    );
  }
  