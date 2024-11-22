"use client"
import { BateriaProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroBaterias() {

    const navigate = useRouter()

    const [bateria, setBateria] = useState<BateriaProps>({
        id: 0,
        tensao_nominal: 0,
        capacidade_ah: 0,
        capacidade_kwh: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const newBateria = { ...bateria, [name]: value }

        if (name === "tensao_nominal" || name === "capacidade_ah") {
            newBateria.capacidade_kwh = (Number(newBateria.tensao_nominal) * Number(newBateria.capacidade_ah)) / 1000;
        }

        setBateria(newBateria)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bateria)
        }

        try {
            const response = await fetch("http://localhost:8080/baterias", cabecalho)

            if (response.ok) {
                alert(`bateria cadastrada com sucesso`)
                setBateria({
                    id: 0,
                    tensao_nominal: 0,
                    capacidade_ah: 0,
                    capacidade_kwh: 0,
                })
                navigate.push("/baterias")
            } else {
                alert("Erro ao cadastrar")
            }
        } catch (error) {
            console.error("Erro ao cadastrar a bateria:", error)
        }

    }

    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center font-bold mb-2 text-indigo-600">Cadastro de Baterias</h1>
            <form className="w-1/3 m-auto border border-indigo-950 p-2 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idtensao_nominal">Tensão Nominal</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="tensao_nominal" id="idtensao_nominal"
                        onChange={handleChange} value={bateria.tensao_nominal} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idcapacidade_ah">Capacidade Ah</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="capacidade_ah" id="idcapacidade_ah"
                        onChange={handleChange} value={bateria.capacidade_ah} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idcapacidade_kwh">Capacidade Kwh</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="capacidade_kwh" id="idcapacidade_kwh"
                        onChange={handleChange} value={bateria.capacidade_kwh} />
                </div>
                <button className="bg-green-700 text-white text-xl p-2 block ms-auto me-2 rounded-md" type="submit">Cadastrar Bateria</button>
            </form>
        </main>
    )

}