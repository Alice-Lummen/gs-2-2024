"use client"
import { CarroProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroCarros() {

    const navigate = useRouter()

    const [carro, setCarro] = useState<CarroProps>({
        id: 0,
        placa: "",
        marca: "",
        modelo: "",
        ano: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCarro({ ...carro, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(carro)
        }

        try {
            const response = await fetch("http://localhost:8080/carros", cabecalho)

            if (response.ok) {
                alert(`${carro.placa} cadastrado com sucesso`)
                setCarro({
                    id: 0,
                    placa: "",
                    marca: "",
                    modelo: "",
                    ano: 0,
                })
                navigate.push("/carros")
            } else {
                alert("Erro ao cadastrar")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o carro:", error)
        }

    }

    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-center font-bold mb-2 text-indigo-600">Cadastro de Carros</h1>
            <form className="w-1/3 m-auto border border-indigo-950 p-2 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idplaca">Placa</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="placa" id="idplaca"
                        onChange={handleChange} value={carro.placa} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmarca">Marca</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="marca" id="idmarca"
                        onChange={handleChange} value={carro.marca} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmodelo">Modelo</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="text" name="modelo" id="idmodelo"
                        onChange={handleChange} value={carro.modelo} />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idano">Ano</label>
                    <input className="border border-gray-700 p-1 rounded-md" type="number" name="ano" id="idano"
                        onChange={handleChange} value={carro.ano} />
                </div>
                <button className="bg-green-700 text-white text-xl p-2 block ms-auto me-2 rounded-md" type="submit">Cadastrar Carro</button>
            </form>
        </main>
    )

}