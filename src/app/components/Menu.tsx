"use client"

import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "@/../public/images/logoTria.png"
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuMobile = () => {
    setIsMenuOpen(!isMenuOpen);
  }

    return (
      <nav className="fixed flex bg-green-700 w-full h-20 z-50 justify-between items-center px-4 md:px-8">
        <Link href={"/"}>
          <div className="text-white font-bold">
            <Image src={Logo} alt="Logo Tria" className="h-8 w-auto md:h-10"></Image>
          </div>
        </Link>
        
        <div className="hidden md:block lg:text-xl w-full md:w-[50%]">
          <ul className="flex flex-row justify-around items-center text-white text-lg">
            <Link href={"/bateria"}><li>Bateria Atual</li></Link>
            <Link href={"/buscarPontos"}><li>Pontos de Recarga</li></Link>
            <Link href={"/calendarioUso"}><li>Calendário de Uso</li></Link>
            <Link href={"/tria"}><li>Sobre nós</li></Link>
          </ul>
        </div>
        
        <div className="block md:hidden">
          <button className="text-white" onClick={menuMobile}><i className="fa-solid fa-bars"></i></button>
          {isMenuOpen && (
            <div className="z-40 absolute top-20 left-0 w-full bg-green-700 text-white opacity-90 p-4">
              <ul className="m-2">
                <Link className="m-2" href={"/bateria"}><li>Bateria Atual</li></Link>
                <Link className="m-2" href={"/buscarPontos"}><li>Pontos de Recarga</li></Link>
                <Link className="m-2" href={"/calendarioUso"}><li>Calendário de Uso</li></Link>
                <Link className="m-2" href={"/tria"}><li>Sobre nós</li></Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
}
  