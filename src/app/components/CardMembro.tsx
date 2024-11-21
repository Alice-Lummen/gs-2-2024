import Image from "next/image";
import { CardMembroProps } from "../types";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CardMembro({ foto, nome, linkGithub, github, linkLinkedin, linkedin, rm, turma }: CardMembroProps) {

    return (
        <div className="p-5 rounded-lg bg-white flex flex-col items-center justify-center gap-2.5 overflow-hidden w-[250px]">
            <Image layout="responsive" src={foto} alt={`Foto integrante: ${nome}`} className="" />
            <h3 className="text-2xl text-[#00345A]">{nome}</h3>
            <div className="w-[250px] flex flex-col items-start gap-1.5 p-5">
                <div className="flex items-center gap-1.5">
                    <i className="fa-brands fa-github text-lg"></i>
                    <a href={linkGithub} className="text-green-900 text-lg font-semibold" target="_blank">{github}</a>
                </div>
                <div className="flex items-center gap-1.5">
                    <i className="fa-brands fa-linkedin text-[#0e76a8] text-lg"></i>
                    <a href={linkLinkedin} className="text-green-900 text-lg font-semibold" target="_blank">{linkedin}</a>
                </div>
                <p className="text-green-900 text-lg">RM: <strong>{rm}</strong></p>
                <p className="text-green-900 text-lg">Turma: <strong>{turma}</strong></p>
            </div>
        </div>
    )
}
