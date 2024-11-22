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

export type CarroProps = {
    id: number;
    placa: string;
    marca: string;
    modelo: string;
    ano: number;
}

export type BateriaProps = {
    id: number;
    tensao_nominal: number;
    capacidade_ah: number;
    capacidade_kwh: number;
}
