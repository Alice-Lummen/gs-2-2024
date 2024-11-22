"use client";
import { useEffect, useState } from "react";
import { BateriaProps } from "../types";
import Link from "next/link";

export default function Baterias() {
    const [lista, setLista] = useState<BateriaProps[]>([]);

    const chamadaApi = async () => {
        const response = await fetch("http://localhost:8080/baterias");
        const data = await response.json();
        setLista(data);
        console.log(data);
    };

    useEffect(() => {
        chamadaApi();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center font-bold mb-2 text-green-600">Baterias</h1>
            <table className="w-3/4 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="py-3 px-4 border-b text-left">Id</th>
                        <th className="py-3 px-4 border-b text-left">Tensão Nominal</th>
                        <th className="py-3 px-4 border-b text-left">Capacidade Ah</th>
                        <th className="py-3 px-4 border-b text-left">Capacidade Kwh</th>
                        <th className="py-3 px-4 border-b text-left">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((bateria) => (
                        <tr key={bateria.id} className="hover:bg-gray-100 transition duration-200">
                            <td className="py-2 px-4 border-b text-left">{bateria.id}</td>
                            <td className="py-2 px-4 border-b text-left">{bateria.tensao_nominal}</td>
                            <td className="py-2 px-4 border-b text-left">{bateria.capacidade_ah}</td>
                            <td className="py-2 px-4 border-b text-left">{bateria.capacidade_kwh}</td>
                            <td className="py-2 px-4 border-b text-left">
                                <Link href={`/baterias/${bateria.id}`} className="text-green-600 hover:text-green-800 font-semibold">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/baterias/cadastro" className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-5">
                Cadastrar Nova Bateria
            </Link>
        </main>
    );
}