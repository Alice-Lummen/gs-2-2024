"use client"
import CabecalhoEquipe from "../components/CabecalhoEquipe";
import CardMembro from "../components/CardMembro";
import Alice from "@/../public/images/alice.png"
import Akira from "@/../public/images/akira.png"
import Anne from "@/../public/images/anne.png"


export default function Equipe() {

    return (
        <>  
            <CabecalhoEquipe/>
            <main className="flex flex-col">
                <h2 className="text-3xl ml-10 font-semibold" style={{color: "var(--verde-escuro)"}}>Conheça nossa equipe!</h2>
                <div className="flex items-center justify-around p-10 m-14" style={{backgroundColor: "var(--verde-claro)"}}>
                    <CardMembro foto={Anne} nome="Anne Rezendes" linkGithub="https://github.com/annerezendes" github="annerezendes" linkLinkedin="https://www.linkedin.com/in/anne-rezendes-1450092b4/" linkedin="Anne Rezendes" rm={556779} turma="1TDSPI" />
                    <CardMembro foto={Alice} nome="Alice Nunes" linkGithub="https://github.com/Lice-Santos" github="lice-santos" linkLinkedin="https://www.linkedin.com/in/alice-nunessantos" linkedin="Alice Nunes" rm={559052} turma="1TDSPI"/>
                    <CardMembro foto={Akira} nome="Guilherme Akira" linkGithub="https://github.com/guiakiraa" linkLinkedin="https://www.linkedin.com/in/guilherme-akira-8214bb2b7/" linkedin="Guilherme Akira" github="guiakiraa" rm={556128} turma="1TDSPI" />
                </div>
            </main>
        </>
    )
}