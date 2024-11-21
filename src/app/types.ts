import { StaticImageData } from "next/image";

export type CardMembroProps = {
    foto: StaticImageData;
    nome: string;
    linkGithub: string;
    github: string;
    linkLinkedin: string;
    linkedin: string;
    rm: number;
    turma: string;
}