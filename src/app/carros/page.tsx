"use client";
import { useEffect, useState } from "react";
import { CarroProps } from "../types";
import Link from "next/link";

export default function Carros() {
    const [lista, setLista] = useState<CarroProps[]>([]);

    const chamadaApi = async () => {
        const response = await fetch("http://localhost:8080/carros");
        const data = await response.json();
        setLista(data);
        console.log(data);
    };

    useEffect(() => {
        chamadaApi();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center font-bold mb-2 text-green-600">Carros</h1>
            <table className="w-3/4 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="py-3 px-4 border-b text-left">Id</th>
                        <th className="py-3 px-4 border-b text-left">Placa</th>
                        <th className="py-3 px-4 border-b text-left">Marca</th>
                        <th className="py-3 px-4 border-b text-left">Modelo</th>
                        <th className="py-3 px-4 border-b text-left">Ano</th>
                        <th className="py-3 px-4 border-b text-left">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((carro) => (
                        <tr key={carro.id} className="hover:bg-gray-100 transition duration-200">
                            <td className="py-2 px-4 border-b text-left">{carro.id}</td>
                            <td className="py-2 px-4 border-b text-left">{carro.placa}</td>
                            <td className="py-2 px-4 border-b text-left">{carro.marca}</td>
                            <td className="py-2 px-4 border-b text-left">{carro.modelo}</td>
                            <td className="py-2 px-4 border-b text-left">{carro.ano}</td>
                            <td className="py-2 px-4 border-b text-left">
                                <Link href={`/carros/${carro.id}`} className="text-green-600 hover:text-green-800 font-semibold">
                                    Ver Detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/carros/cadastro" className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-5">
                Cadastrar Novo Carro
            </Link>
        </main>
    );
}